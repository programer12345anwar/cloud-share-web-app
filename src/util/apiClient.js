import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";

let networkErrorCount = 0;
const MAX_NETWORK_ERRORS = 3; // Show banner only after multiple failures

// Create axios instance with timeout
export const apiClient = axios.create({
  timeout: 10000, // 10 second timeout
});

// Response interceptor for global error handling
apiClient.interceptors.response.use(
  (response) => {
    // Reset error count on successful request
    networkErrorCount = 0;
    return response;
  },
  (error) => {
    const errorMessage = {
      status: null,
      message: "An error occurred",
      isNetworkError: false,
    };

    if (!error.response) {
      // Network error or timeout - increment counter
      networkErrorCount++;
      errorMessage.isNetworkError = true;
      errorMessage.message =
        error.message === "Network Error"
          ? "Network error - Please check your internet connection and try again"
          : error.code === "ECONNABORTED"
            ? "Request timeout - The server is taking too long to respond"
            : "Backend server is unreachable. Please try again later.";
    } else {
      // Server responded with error status - reset counter
      networkErrorCount = 0;
      errorMessage.status = error.response.status;
      errorMessage.message =
        error.response.data?.message ||
        `Server error: ${error.response.status}`;
    }

    return Promise.reject(errorMessage);
  },
);

// Check if backend is truly unreachable
export const isBackendDown = () => {
  return networkErrorCount >= MAX_NETWORK_ERRORS;
};

// Reset error counter
export const resetErrorCounter = () => {
  networkErrorCount = 0;
};

export default apiClient;
