import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure as UseDisclosure,
} from "@chakra-ui/react";


const Footer = React.lazy(() => import("../components/Footer"));
const ScrollToTop = React.lazy(() => import("../components/ScrollToTop"));
const CookieContainer = React.lazy(() =>
  import("../components/CookieContainer")
);

function Layout(props) {
  const { isOpen, onOpen, onClose } = UseDisclosure();

  return (
    <>
      <Box minH="100vh" zIndex="100">
        <Sidebar
          onClose={() => onClose}
          display={{ base: "none", md: "none" }}
        />
        <Drawer
          autoFocus={true}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="xs"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>

        {/*= Header =*/}
        <Header onOpen={onOpen} />

        <Box>
          <ScrollToTop />
          <CookieContainer />
          {props.children}
          <Footer />
        </Box>
      </Box>
      )
    </>
  );
}

export default Layout;
