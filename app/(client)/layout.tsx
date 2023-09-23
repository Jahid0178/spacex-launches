"use client";

import React from "react";
import client from "../../graphql/apollo-client";
import Header from "@/components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import Footer from "@/components/Footer/Footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ApolloProvider>
    </>
  );
};

export default ClientLayout;
