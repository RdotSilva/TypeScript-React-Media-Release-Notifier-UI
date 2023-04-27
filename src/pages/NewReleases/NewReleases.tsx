import { Box, Flex, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { IncomingMovie, Movie } from "../../mocks/mockMovies";
import { fetchUpcomingMovieUrl, transformMovie } from "../../utils/movies";
import axios from "axios";
import { useQuery } from "react-query";

const fetchMovieData = async (): Promise<any> => {
  const response = await axios.get(fetchUpcomingMovieUrl);
  return response.data;
};

const NewReleases = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { isLoading, error, data } = useQuery("movieData", fetchMovieData);

  useEffect(() => {
    if (!isLoading) {
      setMovies(
        data.results.map((incomingMovie: IncomingMovie) => {
          return transformMovie(incomingMovie);
        })
      );
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

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
