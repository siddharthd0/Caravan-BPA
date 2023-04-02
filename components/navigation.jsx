import { Box, Flex, Spacer, Text, Link, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      w="100%"
      py={4}
      px={20}
      position="sticky"
      top={0}
      zIndex={2}
      alignItems="center"
    >
      <Text fontSize="2xl" fontWeight="bold">
        CARAVAN.
      </Text>
      <Spacer />
      <Box display={{ base: "none", md: "flex" }} alignItems="center">
        <Link
          _hover={{
            textDecoration: "none",
            color: "blue.300",
          }}
          href="/"
          mx={3}
          fontSize="lg"
        >
          Home
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
            color: "blue.300",
          }}
          href="browse"
          mx={3}
          fontSize="lg"
        >
          Browse Cars
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
            color: "blue.300",
          }}
          href="sales"
          mx={3}
          fontSize="lg"
        >
          Sales Team
        </Link>
        <Link
          href="loan"
          _hover={{
            textDecoration: "none",
            color: "blue.300",
          }}
          mx={3}
          fontSize="lg"
        >
          Loan Estimator
        </Link>
        <Link
          href="faq"
          _hover={{
            textDecoration: "none",
            color: "blue.300",
          }}
          mx={3}
          fontSize="lg"
        >
          FAQ
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
          }}
          href="contact"
        >
          <Button colorScheme="blue" ml={6}>
            Contact Us Now
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
