import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";

function HeaderBody() {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <>
          <Logo />
        </>
        <Text>searchbox</Text>
        <Text>vv</Text>
      </Flex>
    </>
  );
}

export default HeaderBody;
