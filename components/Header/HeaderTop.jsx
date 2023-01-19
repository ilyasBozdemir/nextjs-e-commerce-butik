import { Spacer, Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";

import Link from "next/link";
import SettingSidebarButton from "../SettingSidebar/SettingSidebarButton";
import SettingSidebar from "../SettingSidebar";

function HeaderTop() {
  const {
    isOpen: isOpenSettingSidebar,
    onOpen: onOpenSettingSidebar,
    onClose: onCloseSettingSidebar,
  } = useDisclosure();

  const _hover = {
    color: "gray.400",
  };

  return <>
   <>
      <Flex
        justifyContent={"flex-start"}
        fontSize={"xs"}
        textAlign="center"
        justifyItems={"center"}
      >
        <Box _hover={_hover} mx={3}>
          <Link href="#">info@eflatunbutik.com</Link>
        </Box>

        <Box _hover={_hover} mx={3}>
          <Link href="#">S.S.S</Link>
        </Box>

        <Spacer />
        <Box _hover={_hover} mx={3}>
          <Link href="#">Siparişim Nerede</Link>
        </Box>

        <Box _hover={_hover} mx={3}>
          <Link href="#">Yardım</Link>
        </Box>
        <Box _hover={_hover} mx={3}>
          <Link href="#">Bize Ulaşın</Link>
        </Box>

        <Box>
          <SettingSidebarButton onOpen={onOpenSettingSidebar} />
        </Box>
      </Flex>

      <SettingSidebar
        onOpen={onOpenSettingSidebar}
        isOpen={isOpenSettingSidebar}
        onClose={onCloseSettingSidebar}
      />
    </>
  </>;
}

export default HeaderTop;
