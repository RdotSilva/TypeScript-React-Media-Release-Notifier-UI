import * as React from "react";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import store, { StoreContext } from "./store";

const queryClient = new QueryClient();

export const App = () => (
  <StoreContext.Provider value={store}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </StoreContext.Provider>
);
