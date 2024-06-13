import React, {
  Fragment,
  Suspense,
  createContext,
  useEffect,
  useState,
} from "react";
import "./App.css";
import { CustomTheme, lightTheme, darkTheme } from "./themes/Theme";
import { ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./components/common/Footer";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import GlobalRoutes from "./router/GlobalRoutes";
import { SnackbarProvider } from "notistack";
import Navbar from "./components/common/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import CTA from "./components/common/CTA";
import ScrollToTop from "./components/common/ScrolltoTop";
import GlobalScrolltotop from "./components/common/GlobalScrolltotop";
import { getCountries } from "./api/Main";
import { getBanners, getIcons } from "./api/GetRequests";

// GlobalContext

export const CountriesList = createContext(null);

export const Domain = createContext(null);

export const Banners = createContext(null);

export const Icons = createContext(null);

// --------------------------------------------------------   App

function App() {
  const { pathname } = useLocation();

  const theme = useTheme();

  // console.log(Condition);

  const condition = pathname === "/404";

  const hostname = window.location.hostname;

  const Mobile = theme.breakpoints.between("xs", "md");

  // ------------------------------------------------------ APIs

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then((res) => {
        // console.log(res);
        setCountries(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ------------------------------------------------------------- Banners

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getBanners()
      .then((res) => {
        // console.log(res);
        const respdata = res.data.response;
        const filtereddata = respdata ? respdata.filter(
          (item) => item.pagepath === pathname
        ) : [];
        // console.log(filtereddata, "filterdata");
        setBanners(filtereddata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ------------------------------------------------------------- Icons

  const [Iconsdata, setIcons] = useState([]);

  useEffect(() => {
    getIcons()
      .then((res) => {
        // console.log(res);
        const respdata = res.data.response;
        const filtereddata = respdata.filter((item) =>
          item.pagepath.includes(pathname)
        );
        // console.log(filtereddata, "filterdata");
        setIcons(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ------------------------------------------------------------- Switch

  const [toggleSwitch, setToggleSwitch] = useState(false);

  const handleToggleSwitch = () => {
    setToggleSwitch(!toggleSwitch);
  };

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <AnimatePresence>
            <div className="App">
              <ScrollToTop />
              {condition ? null : <Navbar ToggleTheme={handleToggleSwitch} />}
              <CountriesList.Provider value={countries}>
                <Domain.Provider value={hostname}>
                  <Banners.Provider value={banners}>
                    <Icons.Provider value={Iconsdata}>
                      <GlobalRoutes />
                    </Icons.Provider>
                  </Banners.Provider>
                  {/* <GlobalRoutes /> */}
                </Domain.Provider>
              </CountriesList.Provider>
              {condition ? null : <Footer />}
              {/* {Mobile ? null : condition ? null : <GlobalScrolltotop />} */}
            </div>
          </AnimatePresence>
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
