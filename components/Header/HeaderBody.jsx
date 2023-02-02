import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";

function HeaderBody() {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <>
          <Logo />
        </>
        <Box>searchbox</Box>
        <Box>

        </Box>
      </Flex>
    </>
  );
}

export default HeaderBody;
