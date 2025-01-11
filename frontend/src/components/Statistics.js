// frontend/src/components/Statistics.js
import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { getStatistics } from "../services/api";

function Statistics({ month }) {
  const [stats, setStats] = useState({
    totalSales: 0,
    soldItems: 0,
    notSoldItems: 0,
  });

  useEffect(() => {
    fetchStatistics();
  }, [month]);

  const fetchStatistics = async () => {
    try {
      const data = await getStatistics(month);
      setStats(data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6">Total Sales</Typography>
          <Typography variant="h4">${stats.totalSales.toFixed(2)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6">Sold Items</Typography>
          <Typography variant="h4">{stats.soldItems}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6">Not Sold Items</Typography>
          <Typography variant="h4">{stats.notSoldItems}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Statistics;
