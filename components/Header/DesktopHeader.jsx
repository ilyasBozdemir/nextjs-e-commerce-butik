import { Stack } from "@chakra-ui/react";
import React from "react";
import HeaderBody from "./Sections/HeaderBody";
import HeaderBottom from "./Sections/HeaderBottom";
import HeaderTop from "./Sections/HeaderTop";

function DesktopHeader() {
  return (
    <>
      <Stack w={"100%"}>
        <HeaderTop />
        <HeaderBody />
        <HeaderBottom />
      </Stack>
    </>
  );
}

export default DesktopHeader;
