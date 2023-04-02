import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { FaCar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box borderTop={"1px"} borderColor="blue.300"  bgGradient="linear(to-r, cyan.500, purple.500)" color="white" py={6} px={{ base: 4, md: 8 }}>
      <VStack spacing={6}>
        <Flex alignItems="center">
          <Icon as={FaCar} fontSize="3xl" />
          <Text fontSize="xl" fontWeight="bold" ml={2}>
            CARAVAN.
          </Text>
        </Flex>
        <HStack spacing={4} wrap="wrap" justify="center">
        <Link
          _hover={{
            textDecoration: "none",
            color: "blue.900",
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
            color: "blue.900",
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
            color: "blue.900",
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
            color: "blue.900",
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
            color: "blue.900",
          }}
          mx={3}
          fontSize="lg"
        >
          FAQ
        </Link>
        </HStack>
        <Text>
          © {new Date().getFullYear()} All Rights Reserved.
        </Text>

      </VStack>
    </Box>
  );
};

export default Footer;
