// src/ApolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/your-username/your-subgraph-name", // Update with your subgraph URL
  cache: new InMemoryCache(),
});

export default client;