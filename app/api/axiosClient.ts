import axios from "axios";

// Ideally we'll dynamically set it soon, but for simplicity sake
// const BASE_BACKEND_URL = process.env.REACT_APP_API_URL
const BASE_BACKEND_URL = "http://localhost:5090/api/";
const axiosClient = axios.create({
  baseURL: BASE_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8 ",
    "Access-Control-Allow-Origin": BASE_BACKEND_URL,
  },
});

export { axiosClient };
