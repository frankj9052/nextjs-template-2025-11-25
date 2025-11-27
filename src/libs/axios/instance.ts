import axios from "axios";
import { parseError } from "@frankjhub/shared-error-utils";
import { serverEnv } from "@/config/env.server";

const axiosInstance = axios.create({
  baseURL: serverEnv?.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(parseError(error))
);

export default axiosInstance;
