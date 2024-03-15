import { APIURL } from "../config";
import axios from "axios";

// console.log(APIURL);

export const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

export const getApplication = async (id) => {
  const response = await axios.get(`${APIURL}getApplications/${trackid}`, {
    headers: HeaderData,
  });

  return response;
};

export const getPosition = async (id) => {
  const response = await axios.get(`${APIURL}getApplications/${trackid}`, {
    headers: HeaderData,
  });

  return response;
};

export const getPositions = async (id) => {
  const response = await axios.get(`${APIURL}getpositions`, {
    headers: HeaderData,
  });

  return response;
};

export const filterPostions = async (id) => {
  const response = await axios.get(`${APIURL}getpositions`, {
    headers: HeaderData,
  });

  return response;
};

