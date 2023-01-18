// pages/_app.js
import { MainContext } from "@/contexts/MainContext";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/index";
import theme from "../src/theme";
import { _products } from "@/components/Product/_data";

function MyApp({ Component, pageProps }) {
  let baslik = document.title;

  window.onblur = () => (document.title = "Alışverişe devam et");
  window.onfocus = () => (document.title = baslik);

  const [tags, setTags] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);

  const [basket, setBasket] = React.useState([]);

  const [products, setProducts] = React.useState(_products);
  React.useEffect(()=>{
    setProducts(products)
  },[_products])

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
