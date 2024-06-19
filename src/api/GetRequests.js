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

export const getBanners = async () => {
  const response = await axios.get(
    apiurls.banners,
    {
      headers: HeaderData,
    }
  );

  return response;
};

export const getLAKTECH = async () => {
  const response = await axios.get(apiurls.lifeatktech, {
    headers: HeaderData,
  });

  return response;
};

export const getBranches = async () => {
  const response = await axios.get(apiurls.globalfootprints, {
    headers: HeaderData,
  });

  return response;
};

export const getEvents = async () => {
  const response = await axios.get(apiurls.events, {
    headers: HeaderData,
  });

  return response;
};

export const getLogos = async () => {
  const response = await axios.get(apiurls.logos, {
    headers: HeaderData,
  });

  return response;
};

export const getLeadership = async () => {
  const response = await axios.get(apiurls.leadership, {
    headers: HeaderData,
  });

  return response;
};

export const getIcons = async () => {
  const response = await axios.get(apiurls.icons, {
    headers: HeaderData,
  });

  return response;
};


export const getIndustries = async () => {
  const response = await axios.get(apiurls.industries, {
    headers: HeaderData,
  });

  return response;
};


