import * as React from "react";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <RouterProvider router={router} />
  </ChakraProvider>
);
