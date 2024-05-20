const Main_Server = process.env.REACT_APP_MAIN_SERVER_URL;

const Test_Server = process.env.REACT_APP_TEST_SERVER_URL;

const Local_Server = process.env.REACT_APP_LOCAL_HOST_URL;

// export const APIURL = URL1

export const APIURL = Test_Server;

// export const APIURL = Local_Server;

export const Paths = {
  home: "/home",
  aboutus: {
    company: "/about-us/company",
    leadership: "/about-us/our-team",
  },
  consulting: {
    inforconsulting: "/consulting/infor-consulting",
    sapconsulting: "/consulting/sap-consulting",
    oracleconsulting: "/consulting/oracle-consulting",
    digitaltransformation: "/consulting/digital-transformation",
  },
  other: {
    staffing: "/services/staffing",
  },
  solutions: {
    finsta: "/products/finsta",
    mpdv: "/products/mpdv",
  },
  joinus: {
    searchjobs: "/join-us/job-openings",
    events: "/join-us/event",
    webinar: "/join-us/event/webinar",
    lifeatktech: "/join-us/life-@-ktech",
  },
  contactus: "/contact-us",
};

// console.log(APIURL)
