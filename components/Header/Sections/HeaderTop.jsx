import { Box, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import SettingSidebar from "../../SettingSidebar";
import SettingSidebarButton from "../../SettingSidebar/SettingSidebarButton";


function HeaderTop() {
  const _hover = {
    color: "gray.400",
  };
  const mailto = "info@eflatunbutik.com";

  const {
    isOpen: isOpenSettingSidebar,
    onOpen: onOpenSettingSidebar,
    onClose: onCloseSettingSidebar,
  } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent={"flex-start"}
        fontSize={"xs"}
        textAlign="center"
        justifyItems={"center"}
      >
        <Box _hover={_hover} mx={3}>
          <Link href={`mailto:${mailto}`} legacyBehavior>
            <a>{mailto}</a>
          </Link>
        </Box>

        <Box _hover={_hover} mx={3}>
          <Link href="#" legacyBehavior>
            <a>S.S.S</a>
          </Link>
        </Box>

        <Spacer />
        <Box _hover={_hover} mx={3}>
          <Link href="#" legacyBehavior>
            <a>Siparişim Nerede</a>
          </Link>
        </Box>

        <Box _hover={_hover} mx={3}>
          <Link href="#" legacyBehavior>
            <a>Yardım</a>
          </Link>
        </Box>
        <Box _hover={_hover} mx={3}>
          <Link href="#" legacyBehavior>
            <a>Bize Ulaşın</a>
          </Link>
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
  );
}

export default HeaderTop;
