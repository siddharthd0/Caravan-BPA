import {
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  HStack,
  Image,
  Spacer,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

export default function RepCard({ name, description, image, email }) {
  return (
    <Box
      position="relative"
      borderRadius={"10px"}
      padding={"1.5rem"}
      backgroundColor={"gray.800"}
      boxShadow="lg"
      _hover={{
        backgroundColor: "gray.700",
        boxShadow: "xl",
        transform: "scale(1.02)",
        transition: "all 0.2s ease-in-out",
      }}
      transition="all 0.2s ease-in-out"
      group
    >
      <HStack spacing={4}>
        <Image
          boxSize="100px"
          borderRadius={"20px"}
          src={image}
          alt={name}
          boxShadow="md"
        />
        <VStack maxW="600px" alignItems="start" spacing={2}>
          <Flex>
            <Heading mr="1rem" fontSize={"xl"} color="white">
              {name}
            </Heading>
            <Spacer />
            <Link href={`mailto:${email}`} _hover={{ textDecoration: "none" }}>
              {" "}
              <Icon
                as={FaEnvelope}
                boxSize="1.5rem"
                transition="color 0.3s ease-in-out"
              />
            </Link>
          </Flex>
          <Text color={"gray.300"} marginBottom={"10px"}>
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
