import axios from "axios";
import { apiurls } from "./Urls";

// console.log(APIURL);

export const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};


export const getPositions = async (id) => {
  const response = await axios.get(apiurls.openings, {
    headers: HeaderData,
  });

  return response;
};

export const getBranches = async (id) => {
  const response = await axios.get(apiurls.globalfootprints, {
    headers: HeaderData,
  });

  return response;
};

export const getLAKTECH = async () => {
  const response = await axios.get(apiurls.lifeatktech, {
    headers: HeaderData,
  });

  return response;
};



