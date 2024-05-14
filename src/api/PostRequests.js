import axios from "axios";
import { apiurls } from "./Urls";

// console.log(APIURL);

export const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

export const HeaderMedia = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "multipart/formdata",
  //   Authorization: `Bearer ${token}`,
};

export const applyPosition = async () => {
  const response = await axios.post(apiurls.openings, {
    headers: HeaderData,
  });

  return response;
};

export const raiseEnquiry = async (data) => {
  const response = await axios.post(
    apiurls.enquiries,
    JSON.stringify({
      fullname: data.fullname,
      company: data.company,
      email: data.wemail,
      country: data.country,
      mobile: data.mobile,
      message: data.message,
      tc: data.tc,
      domain: data.domain,
      page: data.page,
    }),
    {
      headers: HeaderData,
    }
  );

  return response;
};
