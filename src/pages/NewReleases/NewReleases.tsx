import { Center, Text } from "@chakra-ui/react";
import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const NewReleases = (newReleases) => {
  return (
    <Center bg="#2D3748" h="100px" color="white">
      <Text fontSize="6xl"> New Releases</Text>
      {newReleases.map((release) => (
        <MovieCard {...release} />
      ))}
    </Center>
  );
};

export default NewReleases;
