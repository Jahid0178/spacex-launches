"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphql/apollo-client";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <main>{children}</main>
      </ApolloProvider>
    </>
  );
};

export default ClientLayout;
