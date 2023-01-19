import {
  Icon,
  Stack,
  Box,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import SettingSidebar from "../../components/SettingSidebar";
import SettingSidebarButton from "../../components/SettingSidebar/SettingSidebarButton";

import BottomNavigation from "../../components/BottomNavigation";

import HeaderTop from "./HeaderTop";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";
import SearchBox from "./SearchBox";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import Logo from "../Logo";
function Header({ onOpen, ...rest }) {
  const {
    isOpen: isOpenSettingSidebar,
    onOpen: onOpenSettingSidebar,
    onClose: onCloseSettingSidebar,
  } = useDisclosure();
  return (
    <>
      <Box
        as="header"
        display={"flex"}
        position="sticky"
        top="0"
        zIndex="250"
        _light={{
          bg: "white",
          boxShadow: `rgba(0, 0, 0, 0.07) 0px 1px 1px,
        rgba(0, 0, 0, 0.07) 0px 2px 2px,
        rgba(0, 0, 0, 0.07) 0px 4px 4px,
        rgba(0, 0, 0, 0.07) 0px 8px 8px,
        rgba(0, 0, 0, 0.07) 0px 16px 16px`,
        }}
        _dark={{ bg: "blackAlpha.50" }}
        {...rest}
      >
        {/* isMobile*/}
        <Flex
          direction={"column"}
          display={{ base: "flex", md: "none" }}
          justifyItems={"center"}
          width={"100%"}
        >
          <Box
            my={2}
            as="span"
            display={"flex"}
            direction={"row"}
            textAlign={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Stack
              onClick={onOpen}
              alignItems={"center"}
              cursor="pointer"
              display={"flex !important"}
              direction={"column"}
              overflow={"auto"}
              px={3}
              pos={"relative"}
              top={"5px"}
              fontWeight={"semibold"}
            >
              <Icon
                pos={"absolute"}
                display={{ base: "flex", md: "none" }}
                variant="ghost"
                aria-label="open menu"
                as={FiMenu}
                bg="transparent"
              />
              <Text as="small">Menü</Text>
            </Stack>
            <Text
              as="div"
              display={{ base: "flex", md: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              <Link to="/">
                <a> <Logo /></a>
               
              </Link>
            </Text>
            <Spacer />
            {/*settings component*/}
            <Box display={{ base: "block", md: "block", lg: "none" }}>
              <SettingSidebarButton onOpen={onOpenSettingSidebar} />
            </Box>
            <SettingSidebar
              onOpen={onOpenSettingSidebar}
              isOpen={isOpenSettingSidebar}
              onClose={onCloseSettingSidebar}
            />
          </Box>
          <Box
            my={2}
            as="span"
            display={"flex"}
            direction={"row"}
            justifyContent={"center"}
            width={"100%"}
          >
            <SearchBox />
          </Box>
        </Flex>
        {/* /isMobile*/}

        {/* isDesktop*/}
        <Stack display={{ base: "none", md: "flex" }} w={"100%"}>
          <HeaderTop />
          <HeaderBrand />
          <HeaderMenu />
        </Stack>
        {/* /isDesktop*/}
      </Box>
      {/*= Mobile Bottom Navigation =*/}
      <Box
        display={{ base: "block", md: "none" }}
        boxShadow={
          " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
        }
      >
        <BottomNavigation />
      </Box>
    </>
  );
}

export default Header;
