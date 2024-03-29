import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Image, Stack, Text, Box } from "@chakra-ui/react";

import {images} from '../constants/images'

const ImageItem = (props) => {
  const { src, to, name, ...rest } = props;

  return (
    <>
      <Stack
        display={"flex !important"}
        direction={"column"}
        alignItems={"center"}
        overflow={"auto"}
        {...rest}
        onClick={() => {}}
      >
        <Image
          css={{
            borderRadius: "50px",
          }}
          borderRadius="full"
          boxSize="50px"
          src={src}
          alt={name}
          objectFit="cover"
          draggable={false}
        />
        <Text as={"span"} size={"sm"}>
          {name}
        </Text>
      </Stack>
    </>
  );
};

function IGStory() {
  var settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flex justifyContent={"center"}>
      <Box maxW={"85%"} pos={"relative"}>
        <Slider
          slidesToShow={6}
          lazyLoad={true}
          initialSlide={2}
          infinite
          arrows={true}
          {...settings}
        >
          {images.map((image, index) => {
            return (
              <Box as={"span"} key={index} cursor={"pointer"}>
                <ImageItem {...image} />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Flex>
  );
}

export default React.memo(IGStory);
