import TinaProvider from "../.tina/components/TinaDynamicProvider";
import { ChakraProvider } from "@chakra-ui/react"
import "../utils/player.css"
import { Navbar } from "../components/Navbar/NavBar";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Navbar/>
      <TinaProvider>
        <Component {...pageProps} />
      </TinaProvider>
    </ChakraProvider>
  );
};

export default App;
