import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <RouterProvider router={router} />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        Welcome to Release Notifier
      </Grid>
    </Box>
  </ChakraProvider>
);
