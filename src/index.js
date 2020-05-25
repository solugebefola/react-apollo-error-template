import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { link } from "./graphql/link";
import { typeDefs, resolvers } from "./graphql/client_side";
import App from "./App";

import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  typeDefs,
  resolvers
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
