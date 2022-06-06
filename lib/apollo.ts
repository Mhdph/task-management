import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloclient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default apolloclient;
