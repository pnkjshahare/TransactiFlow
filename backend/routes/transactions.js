// backend/routes/transactions.js
const router = require("express").Router();
const Transaction = require("../models/Transaction");
const axios = require("axios");

// Initialize database
router.get("/initialize", async (req, res) => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    await Transaction.deleteMany({});
    await Transaction.insertMany(response.data);
    res.json({ message: "Database initialized" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get transactions with search and pagination
router.get("/", async (req, res) => {
  try {
    const { month, search, page = 1, perPage = 10 } = req.query;
    const query = {
      $expr: { $eq: [{ $month: "$dateOfSale" }, parseInt(month)] },
    };

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { price: isNaN(search) ? undefined : Number(search) },
      ].filter(Boolean);
    }

    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);

    const total = await Transaction.countDocuments(query);

    res.json({
      transactions,
      total,
      pages: Math.ceil(total / perPage),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get statistics
router.get("/statistics/:month", async (req, res) => {
  try {
    const month = parseInt(req.params.month);
    const query = {
      $expr: { $eq: [{ $month: "$dateOfSale" }, month] },
    };

    const [totalSales, soldItems, notSoldItems] = await Promise.all([
      Transaction.aggregate([
        { $match: query },
        { $group: { _id: null, total: { $sum: "$price" } } },
      ]),
      Transaction.countDocuments({ ...query, sold: true }),
      Transaction.countDocuments({ ...query, sold: false }),
    ]);

    res.json({
      totalSales: totalSales[0]?.total || 0,
      soldItems,
      notSoldItems,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get bar chart data
router.get("/bar-chart/:month", async (req, res) => {
  try {
    const month = parseInt(req.params.month);
    const ranges = [
      { min: 0, max: 100 },
      { min: 101, max: 200 },
      { min: 201, max: 300 },
      { min: 301, max: 400 },
      { min: 401, max: 500 },
      { min: 501, max: 600 },
      { min: 601, max: 700 },
      { min: 701, max: 800 },
      { min: 801, max: 900 },
      { min: 901, max: Infinity },
    ];

    const result = await Promise.all(
      ranges.map(({ min, max }) =>
        Transaction.countDocuments({
          $expr: { $eq: [{ $month: "$dateOfSale" }, month] },
          price: { $gte: min, $lt: max === Infinity ? 1000000 : max },
        })
      )
    );

    res.json(
      ranges.map((range, index) => ({
        range: `${range.min}-${range.max === Infinity ? "above" : range.max}`,
        count: result[index],
      }))
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
