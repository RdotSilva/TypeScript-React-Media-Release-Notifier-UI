import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Not <br />
            <Text as={"span"} color={"green.400"}>
              Found
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Sorry, the page you're looking for can't be found.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default NotFound;
