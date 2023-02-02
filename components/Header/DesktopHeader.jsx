import { Stack } from '@chakra-ui/react'
import React from 'react'
import HeaderBody from './HeaderBody'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'

function DesktopHeader() {
  return (
    <>
    <Stack display={{ base: "none", md: "flex" }} w={"100%"}>
    <HeaderTop />
    <HeaderBody/>
    <HeaderBottom />
  </Stack>
    </>
  )
}

export default DesktopHeader