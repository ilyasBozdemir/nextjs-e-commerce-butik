import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Box, Drawer, DrawerContent, useDisclosure ,DrawerCloseButton} from "@chakra-ui/react";
import React from "react";
export default function Layout({ children }) {


  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh">
   
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="sm"
      >
        <DrawerContent>
        <DrawerCloseButton />
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/*= Header =*/}

      <Header onOpen={onOpen} />

      <Box ml={{ base: 0, md: 0 }} >
        {children}
      </Box>
      
    </Box>
  );
}
