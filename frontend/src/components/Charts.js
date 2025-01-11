import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getBarChartData } from "../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Charts({ month }) {
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchBarChartData();
  }, [month]);

  const fetchBarChartData = async () => {
    try {
      const data = await getBarChartData(month);
      setBarData({
        labels: data.map((item) => item.range),
        datasets: [
          {
            label: "Number of Items",
            data: data.map((item) => item.count),
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching bar chart data:", error);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Price Range Distribution",
      },
    },
  };

  return (
    <div>
      <Bar options={options} data={barData} />
    </div>
  );
}

export default Charts;
