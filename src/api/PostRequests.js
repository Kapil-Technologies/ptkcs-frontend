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

  const response = await axios.post(apiurls.applications, formdata, {
    headers: HeaderMedia,
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



export const eventRegister = async (data) => {
  const response = await axios.post(
    apiurls.eventsregistrations,
    JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      company: data.company,
      designation: data.designation,
      email: data.email,
      country: data.country,
      mobile: data.mobile,
      tc: data.tc,
      eventid: data.eventid,
      eventname: data.eventname,
      eventdescription: data.eventdescription,
      eventstarttime: data.eventstarttime,
      duration: data.duration,
      urllink: data.urllink,
      status: "NEEDS ACTION",
      domain:"ptkcs.com"
    }),
    {
      headers: HeaderData,
    }
  );

  return response;
};
