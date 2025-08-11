import axios from "axios";

// This is the correct, full URL for your backend API.
// It should be used in both development and production.
const BASE_URL = "https://zapp-test-api.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
