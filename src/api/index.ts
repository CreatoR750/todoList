import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return {
      ...response,
      data: response.data,
    };
  },
  (error: AxiosError<{ message: string }>) => {
    return Promise.reject(error);
  }
);
