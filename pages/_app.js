// pages/_app.js
import { MainContext } from "@/contexts/MainContext";
import { ChakraProvider } from "@chakra-ui/react";
import AdminLayout from "../layout/AdminLayout";
import UserLayout from "../layout/UserLayout";
import theme from "../src/theme";
import React from "react";

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const data = {};
  let Layout;
  const router = useRouter();
  if (router.pathname === "/") {
    Layout = UserLayout;
  } else if (router.pathname.startsWith("/admin")) {
    Layout = AdminLayout;
  } else {
    Layout = UserLayout;
  }
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
