import axios from "axios";
import { apiurls } from "./Urls";
import { axiosInstance } from "../axios";

// console.log(APIURL);

export const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

export const raiseEnquiry = async (data) => {
  const response = await axiosInstance.post(
    apiurls.enquiries,
    JSON.stringify({
      fullname: data.fullname,
      company: data.company,
      email: data.wemail,
      country: data.country,
      mobile: data.mobile,
      message: data.message,
      tc: data.tc,
      domain: "ptkcs.com",
      page: data.page,
      industry: data.industry,
    }),
    {
      headers: HeaderData,
    }
  );

  return response;
};
