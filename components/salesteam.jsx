import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Heading,
  ScaleFade,
} from "@chakra-ui/react";

const SalesPerson = ({ name, imageUrl }) => {
  return (
    <Box maxW="sm" ml="5rem">
      <Image
        maxW="150px"
        borderRadius={"full"}
        src={imageUrl}
        alt={`${name}'s photo`}
      />
      <Box p="6">
        <Text textAlign={"center"} fontWeight="bold" fontSize="xl" mb="2">
          {name}
        </Text>
      </Box>
    </Box>
  );
};

const SalesTeam = () => {
  const salesPeople = [
    {
      name: "Jane Doe",
      imageUrl: "janedoe.png",
    },
    {
      name: "John Smith",
      imageUrl: "john.png",
    },
    {
      name: "Bob Martin",
      imageUrl: "bob.png",
    },
  ];

  return (
    <Flex
    justifyContent="center"
    alignItems="center"
    py="2rem"
     direction="column"
    >
        <Heading mb="2rem" fontSize="5xl">
            Meet Our Sales Representatives
        </Heading>
      <Flex>
        {salesPeople.map((person, index) => (
          <SalesPerson
            key={index}
            name={person.name}
            imageUrl={person.imageUrl}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default SalesTeam;
