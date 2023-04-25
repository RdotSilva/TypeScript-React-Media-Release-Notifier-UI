import { Box, Image, Badge, Text } from "@chakra-ui/react";
import React from "react";

interface MovieCardProps {
  image: string;
  title: string;
  description: string;
  releaseDate: string;
  movieUrl: string;
}

const MovieCardAlt = ({
  image,
  title,
  description,
  releaseDate,
  movieUrl,
}: MovieCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {movieUrl}
          </Badge>
          <Text
            ml="2"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
          >
            {releaseDate}
          </Text>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>{description}</Box>
      </Box>
    </Box>
  );
};

export default MovieCardAlt;
