import axios from "axios";
import { apiurls } from "./Urls";
import { axiosInstance } from "../axios";

// console.log(APIURL);

export const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

export const getBanners = async () => {
  const response = await axiosInstance.get(apiurls.banners, {
    headers: HeaderData,
  });

  return response;
};

export const getBranches = async () => {
  const response = await axiosInstance.get(apiurls.globalfootprints, {
    headers: HeaderData,
  });

  return response;
};

export const getLogos = async () => {
  const response = await axiosInstance.get(apiurls.logos, {
    headers: HeaderData,
  });

  return response;
};

export const getWebPicture = async () => {
  const response = await axiosInstance.get(apiurls.webpages, {
    headers: HeaderData,
  });

  return response;
};

export const getCountries = async () => {
  const response = await axiosInstance.get(`${apiurls.countries}`, {
    headers: HeaderData,
  });

  return response;
};

export const getIcons = async () => {
  const response = await axiosInstance.get(apiurls.icons, {
    headers: HeaderData,
  });

  return response;
};

export const ViewCount = async (data) => {
  const response = await axiosInstance.post(
    apiurls.views,
    JSON.stringify({
      browsername: data.browsername,
      browserversion: data.browserversion,
      deviceSizeType: data.deviceSizeType,
      deviceVP: data.deviceVP,
      visitedPage: data.page,
      domain: "ptkcs.com",
    }),
    {
      headers: HeaderData,
    }
  );
  // console.log(data)
  return response;
};
