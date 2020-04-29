import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { lightTheme, darkTheme } from "../src/theme";
// import useDarkMode from "../src/useDarkMode";
import MainLayout from "../components/MainLayout";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/*
https://github.com/mui-org/material-ui/tree/master/examples/nextjs
I'm gonna be honest, I don't really understand this
    
*/

export default function MyApp(props) {
  const { Component, pageProps } = props;
  
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  // From example vvv
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  // From example ^^^

  return (
    <React.Fragment>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {/* CssBaseline changes the background color in addition to other stuff */}
        <CssBaseline />
        <MainLayout toggleTheme={toggleTheme} darkMode={darkMode}>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
