import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
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
import { genreList } from "../../utils/genres";

interface Genre {
  id: number;
  name: string;
}

interface FormData {
  [key: string]: boolean;
}

const UserOptions: React.FC<any> = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmitHandler = (formData: FormData) => {
    console.log(formData);
  };

  const store = useStore();

  const {
    userStore: { name },
  } = store;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>Welcome {name}</div>
      <Flex p={4} borderRadius="md">
        <FormControl as="fieldset">
          <FormLabel as="legend">Select your genres</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack spacing="24px">
              {Object.keys(genreList).map((genre) => (
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
  );
};

export default UserOptions;
