import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Navbar from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
