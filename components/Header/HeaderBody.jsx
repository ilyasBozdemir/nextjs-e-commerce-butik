import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react"
import Logo from "../Logo";

function HeaderBody() {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Box mx={3}>
          <Logo />
        </Box>
        <Box>searchbox</Box>
        <Box>hesabım favorilerim sepetim</Box>
      </Flex>
    </>
  );
}

export default HeaderBody;
