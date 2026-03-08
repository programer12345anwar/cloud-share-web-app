import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";

// Create axios instance with timeout
export const apiClient = axios.create({
  timeout: 10000, // 10 second timeout
});

// Response interceptor for global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = {
      status: null,
      message: "An error occurred",
      isNetworkError: false,
    };

    if (!error.response) {
      // Network error or timeout
      errorMessage.isNetworkError = true;
      errorMessage.message =
        error.message === "Network Error"
          ? "Network error - Please check your internet connection and try again"
          : error.code === "ECONNABORTED"
          ? "Request timeout - The server is taking too long to respond"
          : "Backend server is unreachable. Please try again later.";
    } else {
      // Server responded with error status
      errorMessage.status = error.response.status;
      errorMessage.message =
        error.response.data?.message ||
        `Server error: ${error.response.status}`;
    }

    return Promise.reject(errorMessage);
  }
);

// Check backend health
export const checkBackendHealth = async () => {
  try {
    const response = await apiClient.get(
      `${apiEndpoints.UPLOAD_FILE.split("/files")[0]}/health`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
