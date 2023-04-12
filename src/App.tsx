import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        Welcome to Release Notifier
      </Grid>
    </Box>
  </ChakraProvider>
);
