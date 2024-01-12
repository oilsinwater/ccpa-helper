import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import customTheme from '../theme'; // Import your custom theme

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}> {/* Use your custom theme */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
