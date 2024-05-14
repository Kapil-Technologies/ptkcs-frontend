import { apiurls } from "./Urls";
import axios from "axios";

// console.log(APIURL);

export const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

export const getCountries = async () => {
  const response = await axios.get(`${apiurls.countries}`, {
    headers: HeaderData,
  });

  return response;
};

