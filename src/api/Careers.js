import { APIURL } from "../config";
import axios from "axios";
import { apiurls } from "./Urls";
import { axiosInstance } from "../axios";

// console.log(APIURL);

export const HeaderData = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/Json",
  //   Authorization: `Bearer ${token}`,
};

export const getApplication = async (id) => {
  const response = await axiosInstance.get(`${APIURL}getApplications/${id}`, {
    headers: HeaderData,
  });

  return response;
};

export const getPosition = async (id) => {
  const response = await axiosInstance.get(`${APIURL}getpositions/${id}`, {
    headers: HeaderData,
  });

  return response;
};

export const getPositions = async (id) => {
  const response = await axiosInstance.get(apiurls.openings, {
    headers: HeaderData,
  });

  return response;
};

export const filterPostions = async (id) => {
  const response = await axiosInstance.get(`${APIURL}getpositions`, {
    headers: HeaderData,
  });

  return response;
};

export const applyPosition = async (data) => {
  const formdata = new FormData();
  formdata.append("firstname", data.firstname);
  formdata.append("lastname", data.lastname);
  formdata.append("email", data.email);
  formdata.append("mobile", data.mobile);
  formdata.append("appliedto", data.appliedto);
  formdata.append("experience", data.experience);
  formdata.append("relavent", data.relavent);
  formdata.append("ctc", data.ctc);
  formdata.append("ectc", data.ectc);
  formdata.append("notice", data.noticeperiod);
  formdata.append("clocation", data.location);
  formdata.append("relocation", data.relocation);
  formdata.append("referance", data.referance);
  formdata.append("empid", data.empid);
  formdata.append("empname", data.empname);
  formdata.append("filename", data.filename);
  formdata.append("resume", data.resume);
  formdata.append("status", "applied");
  formdata.append("domain", "ptkcs.com");

  const response = await axiosInstance.post(apiurls.applications, formdata, {
    headers: HeaderData,
  });

  return response;
};
