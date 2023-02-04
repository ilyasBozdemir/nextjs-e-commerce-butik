import { Box, Flex, Text,Stack } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";

function HeaderBody() {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Stack>
          <Logo />
        </Stack>
        <Box>searchbox</Box>
        <Box>
        hesabım ,favorilerim ,sepetim
        </Box>
      </Flex>
    </>
  );
}

export default HeaderBody;
