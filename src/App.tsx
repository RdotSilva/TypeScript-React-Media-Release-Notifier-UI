import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NavBar } from "./components/Navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box>
  </ChakraProvider>
);
