import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloclient from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloclient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
