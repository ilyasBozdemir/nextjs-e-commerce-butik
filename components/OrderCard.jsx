import React from "react";

import { BsInfoSquare } from "react-icons/bs";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Text,
  IconButton,
  Flex,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";
function OrderCard(props) {
 
  const navigate = useNavigate();
  return (
    <>
      <Card w={{ base: "100%", md: 300 }} m={1}>
        <CardHeader fontWeight={"semibold"}>
          <Flex justifyContent={"space-between"}>
            <Text> #{props.orderNumber}</Text>
            <IconButton
              colorScheme="pink"
              aria-label="edit address"
              icon={<BsInfoSquare />}
              variant={"ghost"}
              onClick={() => navigate(props.detailPageLink)}
            />
          </Flex>
        </CardHeader>
        <Divider />
        <CardBody
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#444",
              borderRadius: "12px",
            },
          }}
          fontSize={13}
        >
          <Stack direction={"column"} spacing={4} w="90%">
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Adı Soyadı :</Text>
              <Text>{props.name + " " + props.surname}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Sipariş Durumu :</Text>
              <Text>{props.orderState}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Kargo Durumu :</Text>
              <Text>{props.cargoState}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Sipariş Tarihi :</Text>
              <Text>{props.orderDate}</Text>
            </Flex>
            <Flex direction={"row"} justifyContent={"space-between "}>
              <Text>Toplam :</Text>
              <Text fontWeight={"semibold"}>{props.total}</Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default OrderCard;
