import React from "react";

import {
  Card,
  CardBody,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Heading,
  Text,
  Image,
  CardFooter,
} from "@chakra-ui/react";

const MovieCard = ({
  img,
  title,
  description,
  releaseDate,
  linkOne,
  linkTwo,
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={img} alt={title + "img"} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {releaseDate}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            {linkOne}
          </Button>
          <Button variant="ghost" colorScheme="blue">
            {linkTwo}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
