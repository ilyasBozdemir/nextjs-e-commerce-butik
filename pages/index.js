import Head from "next/head";

import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, HStack } from "@chakra-ui/react";
import Showcase from "@/components/Showcase";
import IGStory from "@/components/IGStory";
import Highlights from "@/components/Highlights";

export default function HomePage() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = React.useState(router.asPath);
  const [site, setSite] = React.useState({
    author: "ilyas Bozdemir,bozdemir.ib70@gmail.com",
    title: "Eflatun Butik",
    url: currentUrl,
    image: "/favicon.ico",
    imageAlt: "site-logo-png",
    description:
      "Elbise ,Tesettür Giyim  daha aradığın ve daha fazla indirimli ürün en uygun fiyatlar ve kampanyalarla Eflatun Butik'te.",
    name: "",
  });

  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <meta name="author" content={site.author} />
        {/*<meta property="fb:app_id" content="" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={site.url} />
        <meta property="twitter:title" content={site.title} />
        <meta property="twitter:description" content={site.description} />
        <meta property="twitter:image" content={site.image} />
        <meta property="twitter:image:alt" content={site.imageAlt} />
        <meta
          name="viewport"
          content={`width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content={site.author} />
        <meta name="publisher" content="ilyas Bozdemir" />
        <meta itemprop="name" content={site.name} />
        <meta itemprop="description" content={site.description} />
      </Head>
      <main>
        <Box w={"full"} p={2}>
          {/*  <Box mt={4}>
          
            
           
            <IGStory />
          </Box> 
           */}
          {/*
      <Box mt={4}>
        <MySlider />
      </Box> 
          <Flex
            direction={"row"}
            justifyContent={{ base: "space-between", md: "space-around" }}
            mt={4}
          >
            <Highlights />
          </Flex>

          <HStack mt={4}>
            <Showcase />
          </HStack>
          */}

          <Box as={'p'} h={50}>IGStory</Box>
          <Box as={'p'} h={50}>Highlights</Box>
          <Box as={'p'} h={50}>Öne Çıkanlar</Box>
          <Box as={'p'} h={50}>Çok Satan Ürünler</Box>
          <Box as={'p'} h={50}>Showcases</Box>

        </Box>
      </main>
    </>
  );
}
