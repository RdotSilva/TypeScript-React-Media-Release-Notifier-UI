import { StackDivider, Text, VStack } from "@chakra-ui/react";
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
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {movies.map((release) => (
          <MovieCard {...release} />
        ))}
      </VStack>
    </>
  );
};

export default NewReleases;
