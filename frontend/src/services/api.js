import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Initialize database with seed data
export const initializeDatabase = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions/initialize`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
};

// Get transactions with search and pagination
export const getTransactions = async (
  month,
  search = "",
  page = 1,
  perPage = 10
) => {
  try {
    const response = await axios.get(`${API_URL}/transactions`, {
      params: {
        month,
        search,
        page,
        perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

// Get statistics for selected month
export const getStatistics = async (month) => {
  try {
    const response = await axios.get(
      `${API_URL}/transactions/statistics/${month}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
};

// Get bar chart data for selected month
export const getBarChartData = async (month) => {
  try {
    const response = await axios.get(
      `${API_URL}/transactions/bar-chart/${month}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching bar chart data:", error);
    throw error;
  }
};

// Get pie chart data for selected month
export const getPieChartData = async (month) => {
  try {
    const response = await axios.get(
      `${API_URL}/transactions/pie-chart/${month}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pie chart data:", error);
    throw error;
  }
};

// Get combined data from all APIs
export const getCombinedData = async (month) => {
  try {
    const response = await axios.get(
      `${API_URL}/transactions/combined-data/${month}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching combined data:", error);
    throw error;
  }
};

// Helper function to handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    return {
      status: error.response.status,
      message: error.response.data.message || "An error occurred",
      data: error.response.data,
    };
  } else if (error.request) {
    // Request was made but no response
    return {
      status: 503,
      message: "Service unavailable",
      data: null,
    };
  } else {
    // Error setting up request
    return {
      status: 500,
      message: "Error setting up request",
      data: null,
    };
  }
};
