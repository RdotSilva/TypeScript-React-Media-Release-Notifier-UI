import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const navBarLinks = [
    {
      path: "/newreleases",
      text: "New Releases",
    },
    {
      path: "/options",
      text: "Account",
    },
    {
      path: "/support",
      text: "Support",
    },
  ];

  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {navBarLinks.map((item) => (
                    <Link to={item.path}>{item.text}</Link>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
