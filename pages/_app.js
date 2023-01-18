// pages/_app.js
import { MainContext } from "@/contexts/MainContext";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/index";
import theme from "../src/theme";
import React from "react";
function MyApp({ Component, pageProps }) {


  const data = {

  };
  return (
    <ChakraProvider theme={theme}>
      <MainContext.Provider value={data}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
