import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    console.error("Request Error Interceptor:", error);
    alert("دریافت اطلاعات با مشکل مواجه شد");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    console.error("Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
