import { Center, Text } from "@chakra-ui/react";
import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { mockMovies } from "../../mocks/mockMovies";

const NewReleases = () => {
  return (
    <>
      <Text fontSize="6xl"> New Releases</Text>
      {mockMovies.map((release) => (
        <MovieCard {...release} />
      ))}
    </>
  );
};

export default NewReleases;
