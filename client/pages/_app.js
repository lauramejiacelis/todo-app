import { Provider } from "react-redux";
import { wrapper, store } from "@/redux";
import Layout from "@/components/Layout";
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);