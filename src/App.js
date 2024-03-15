import React, { Fragment, Suspense, useState } from "react";
import "./App.css";
import { CustomTheme } from "./themes/Theme";
import { ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./components/common/Footer";

import { Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import GlobalRoutes from "./router/GlobalRoutes";
import { SnackbarProvider } from "notistack";
import Navbar from "./components/common/Navbar";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import CTA from "./components/common/CTA";

function App() {
  const { pathname } = useLocation();

  // console.log(Condition);

  const condition = pathname === "/404";

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <div className="App">
            {condition ? null : <Navbar />}
            <GlobalRoutes />
            {condition ? null : <Footer />}
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
