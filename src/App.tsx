import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router";
import Layout from "./components/Layout/Layout";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </ChakraProvider>
);
