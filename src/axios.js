import axios from "axios";
import { useLoading } from "./components/common/LoadingComponent";
import { APIURL } from "./config";

const axiosInstance = axios.create({
  baseURL: APIURL, // Replace with your API base URL
});

const SetupInterceptors = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      store.startLoading();
      return config;
    },
    (error) => {
      store.stopLoading();
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      store.stopLoading();
      return response;
    },
    (error) => {
      store.stopLoading();
      return Promise.reject(error);
    }
  );
};

export { axiosInstance, SetupInterceptors };
