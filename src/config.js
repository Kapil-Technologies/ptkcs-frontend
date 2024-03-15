const URL1 = process.env.REACT_APP_SERVER_URL1;

const URL2 = process.env.REACT_APP_SERVER_URL2;

// export const APIURL = URL1

export const APIURL = URL1;

export const Paths = {
  home: "/home",
  aboutus: "/about-us",
  consulting: {
    inforconsulting: "/services/infor-consulting",
    sapconsulting: "/services/sap-consulting",
    oracleconsulting: "/services/oracle-consulting",
    digitaltransformation: "/services/digital-transformation-consulting",
  },
  other: {
    staffing: "/services/staffing",
  },
  solutions: {
    Finsta: "/solutions/finsta",
  },
  joinus: {
    searchjobs: "/join-us/serachjobs",
    events: "/join-us/event",
    webinar: "/join-us/event/webinar",
    lifeatktech: "/join-us/life-@-ktech",
  },
  contactus: "/contact-us",
};

// console.log(APIURL)
