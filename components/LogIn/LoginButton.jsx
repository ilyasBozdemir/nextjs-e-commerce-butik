import React from "react";
import {
  Button,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
function LoginButton({ name }) {
  return (
    <>
      <Button
        id="loginButton"
        variant="primary"
        color={"white"}
        bg={UseColorModeValue("gray.100", "gray.700")}
        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
        _hover={{
          bg: UseColorModeValue("gray.800", "gray.500"),
          bgGradient: "linear(to-l, #ac28ca, #ff1060)",
        }}
        type='submit'
      >
        Giriş Yap
      </Button>
    </>
  );
}

export default LoginButton;
