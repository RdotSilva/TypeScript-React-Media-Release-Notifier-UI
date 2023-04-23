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
import { Link } from "react-router-dom";

interface MovieCardProps {
  image: string;
  title: string;
  description: string;
  releaseDate: string;
  movieUrl: string;
}

const MovieCard = ({
  image,
  title,
  description,
  releaseDate,
  movieUrl,
}: MovieCardProps) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={title + "img"} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            Released on: {releaseDate}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={movieUrl}>TMDB Link</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
