import { Box, Flex, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Movie, mockIncomingMovies, mockMovies } from "../../mocks/mockMovies";
import { transformMovie } from "../../utils/movies";

const NewReleases = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(
      mockIncomingMovies.map((incomingMovie) => {
        return transformMovie(incomingMovie);
      })
    );
  }, []);

  return (
    <>
      <Text fontSize="6xl">New Releases</Text>
      <Flex wrap="wrap" alignContent="center">
        {movies.map((release) => (
          <Box w="500px" h="700px">
            <MovieCard {...release} />
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default NewReleases;
