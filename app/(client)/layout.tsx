"use client";

import React from "react";
import client from "../../graphql/apollo-client";
import Header from "@/components/Header/Header";
import { ApolloProvider } from "@apollo/client";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <main>{children}</main>
      </ApolloProvider>
    </>
  );
};

export default ClientLayout;
