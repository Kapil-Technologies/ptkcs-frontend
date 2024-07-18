import React, { createContext, Fragment, Suspense, useEffect, useState } from "react";
import "./App.css";
import { CustomTheme } from "./themes/Theme";
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
import { LoadingProvider } from "./components/common/LoadingComponent";
import GlobalLoading from "./components/common/GlobalLoading";

export const CountriesList = createContext(null);

function App() {
  const { pathname } = useLocation();
  const theme = useTheme();

  // console.log(Condition);

  const condition = pathname === "/404";

  const Mobile = theme.breakpoints.between("xs", "md");


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

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <AnimatePresence>
            <LoadingProvider>
              <div className="App">
                <ScrollToTop />
                {condition ? null : <Navbar />}
                <CountriesList.Provider value={countries}>
                  <GlobalRoutes />
                  <GlobalLoading />
                </CountriesList.Provider>
                {condition ? null : <Footer />}
                {/* {Mobile ? null : condition ? null : <GlobalScrolltotop />} */}
              </div>
            </LoadingProvider>
          </AnimatePresence>
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
