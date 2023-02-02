// pages/_app.js
import { MainContext } from "@/contexts/MainContext";
import { ChakraProvider } from "@chakra-ui/react";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import theme from "../src/theme";
import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@badrap/bar-of-progress";

function MyApp({ Component, pageProps }) {
  const data = {};
  let Layout;
  const router = useRouter();
  const { statusCode } = router.query;

  if (router.pathname === "/") {
    if (statusCode === 200) {
      Layout = UserLayout;
    } else {
      Layout = ErrorLayout;
    }
  } else if (router.pathname.startsWith("/admin")) {
    if (statusCode === 200) {
      Layout = AdminLayout;
    } else {
      Layout = ErrorLayout;
    }
  } else {
    if (statusCode === 200) {
      Layout = UserLayout;
    } else {
      Layout = ErrorLayout;
    }
  }

  const progress = new ProgressBar({
    size: 2,
    color: "#bd1a30",
    className: "bar-of-progress",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

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
