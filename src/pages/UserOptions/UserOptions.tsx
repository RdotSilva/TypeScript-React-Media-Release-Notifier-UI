import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  RadioGroup,
  Stack,
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
  const [userSelectedGenres, setUserSelectedGenres] =
    useState<GenreUserOptions>(genres);

  const onSubmitHandler = (formData: GenreUserOptions) => {
    setGenres(formData);
  };

  useEffect(() => {
    setUserSelectedGenres(genres);
  }, [genres]);

  return (
    <Container maxW={"3xl"}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormControl as="fieldset">
          <FormLabel as="legend">Select your genres</FormLabel>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack spacing={[1, 1]} direction={["column", "column"]}>
              {Object.keys(userSelectedGenres).map((genre: any) => (
                <Checkbox key={genre} {...register(genre)}>
                  {genre}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <FormHelperText>
            These will determine what new releases we show you
          </FormHelperText>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default UserOptions;
