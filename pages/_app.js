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

function MyApp({ Component, pageProps, statusCode }) {
  const data = {};
  let Layout;
  const router = useRouter();

  const statusCodes = [
    400, //Kötü İstek
    401, //Yetkisiz
    403, //Yasak
    404, //Sayfa Bulunamadı
    500, //sunucu içi hata oluştu
    501, //sunucu desteklemiyor
    502, //kötü ağ geçidi
    503, //sunucu cevap vermezse
    504 //sunucu başka sunucudan veriyi zamanında alamadı.
  ];

  if (router.pathname === "/") {
    if (statusCodes.includes(statusCode)) {
      Layout = ErrorLayout;
    } else if (statusCode === 200 /* */) {
      Layout = UserLayout;
    }
  } else if (router.pathname.startsWith("/admin")) {
    if (statusCodes.includes(statusCode)) {
      Layout = ErrorLayout;
    } else if (statusCode === 200) {
      Layout = AdminLayout;
    }
  } else {
    if (statusCodes.includes(statusCode)) {
      Layout = ErrorLayout;
    } else if (statusCode === 200) {
      Layout = UserLayout;
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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, statusCode: ctx.res ? ctx.res.statusCode : null };
};
export default MyApp;
