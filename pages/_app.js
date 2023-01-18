// pages/_app.js
import { MainContext } from "@/contexts/MainContext";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/index";
import theme from "../src/theme";
import { _products } from "@/components/Product/_data";
import { cart } from "@/components/Cart/_data";
import React from "react";
function MyApp({ Component, pageProps }) {

  const [tags, setTags] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);

  const [basket, setBasket] = React.useState([]);

  const [products, setProducts] = React.useState(_products);
  React.useEffect(() => {
    setProducts(products);
  }, [_products]);

  const [carts, setCarts] = React.useState(cart);

  const data = {
    tags,
    setTags,
    basket,
    setBasket,
    products,
    setProducts,
    wishlist,
    setWishlist,
    carts,
    setCarts,
  };
  return (
    <ChakraProvider theme={theme}>
      <MainContext.Provider value={data}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
