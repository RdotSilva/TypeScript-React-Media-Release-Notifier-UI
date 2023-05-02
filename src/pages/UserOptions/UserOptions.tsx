import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useStore } from "../../store";
import { GenreUserOptions, genreList } from "../../utils/genres";

interface Genre {
  id: number;
  name: string;
}

const UserOptions: React.FC<any> = () => {
  const store = useStore();
  const {
    userStore: { name, setGenres, genres },
  } = store;

  const { register, handleSubmit } = useForm<GenreUserOptions>({
    defaultValues: {
      action: genres.action,
      adventure: genres.adventure,
      animation: genres.animation,
      comedy: genres.comedy,
      crime: genres.crime,
      documentary: genres.documentary,
      drama: genres.drama,
      family: genres.family,
      fantasy: genres.fantasy,
      history: genres.history,
      horror: genres.horror,
      music: genres.music,
      mystery: genres.mystery,
      romance: genres.romance,
      scienceFiction: genres.scienceFiction,
      tvMovie: genres.tvMovie,
      thriller: genres.thriller,
      war: genres.war,
      western: genres.western,
    },
  });
  const [userSelectedGenres, setUserSelectedGenres] = useState<string[]>([]);

  const onSubmitHandler = (formData: GenreUserOptions) => {
    setGenres(formData);
  };

  useEffect(() => {
    if (Object.keys(genres).length) {
      const genreArray = Object.keys(genres).map((genre) => genre);
      setUserSelectedGenres(genreArray);
    } else {
      const existingGenreList = Object.keys(genreList).map((genre) => genre);
      setUserSelectedGenres(existingGenreList);
    }
  }, [genres]);

  return (
    <AbsoluteCenter>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex p={2} borderRadius="md">
          <FormControl as="fieldset">
            <FormLabel as="legend">Select your genres</FormLabel>
            <RadioGroup defaultValue="genres">
              <HStack spacing="24px">
                {userSelectedGenres.map((genre) => (
                  <Checkbox key={genre} {...register(genre)}>
                    {genre}
                  </Checkbox>
                ))}
              </HStack>
            </RadioGroup>
            <FormHelperText>
              These will determine what new releases we show you
            </FormHelperText>
          </FormControl>
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </AbsoluteCenter>
  );
};

export default UserOptions;
