import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

const CallToAction = () => {
  return (
    <Box
      w="100%"
      py={12}
      px={4}
      bgGradient="linear(to-r, cyan.500, purple.500)"
      color="white"
      textAlign={"center"}
    >
      <Flex
      
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        maxW="container.lg"
        mx="auto"
        textAlign={"center"}
        spacing={4}
      >
        <Box >
          <Heading size="2xl" mb={4}>
            Ready to find your dream car?
          </Heading>
          <Text fontSize="lg" mb={4}>
            Explore our extensive selection of cars and experience an unforgettable journey with the car of your dreams.
          </Text>
          <Button as="a" href="browse" size="lg" colorScheme="blue" mt={{ base: 4, md: 0 }}>
          Browse Cars
        </Button>
        </Box>
      
      </Flex>
    </Box>
  );
};

export default CallToAction;
