import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Flex, Stack, VStack } from "@chakra-ui/react";

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

  // Mock for now remove these later
  const genres: Genre[] = [
    {
      id: 1,
      name: "horror",
    },
    {
      id: 2,
      name: "action",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Flex p={4} borderRadius="md">
        {genres.map((genre) => (
          <Checkbox key={genre.id} {...register(genre.name)}>
            {genre.name}
          </Checkbox>
        ))}
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};

export default UserOptions;
