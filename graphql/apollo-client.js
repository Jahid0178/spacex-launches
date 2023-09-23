import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://main--spacex-l4uc6p.apollographos.net/graphql/",
  cache: new InMemoryCache(),
});

export default client;
