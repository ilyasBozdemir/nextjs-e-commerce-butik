import React from "react";

const Footer = React.lazy(() => import("../components/Footer"));
const ScrollToTop = React.lazy(() => import("../components/ScrollToTop"));

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

function UserLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          {/* <CookieContainer />*/}
          {children}
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default UserLayout;
