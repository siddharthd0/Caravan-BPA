import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import Footer from "../components/footer";
import Cta from "../components/cta";
import SalesTeam from "../components/salesteam";

export default function Home() {
  return (
    <>
      <Box>
        <Flex
          pt="5rem"
          marginTop={["-10rem"]}
          minH="115vh"
          justifyContent="center"
          alignItems="center"
          bgGradient="linear(to-r, cyan.600, purple.500)"
        >
          <VStack mr="4rem" spacing={6}>
            <Box as={FaCar} boxSize="100px" color="white" />{" "}
            {/* Use the car icon */}
            <Heading size="2xl" color="white">
              CARAVAN.
            </Heading>
            <Text textAlign={"center"} maxW={"md"} fontSize="xl" color="white">
              Embark on an unforgettable journey with the car of your dreams!
            </Text>
            <Flex direction={["column", "row"]}>
              <Button
                as="a"
                href="browse"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.2s ease-in-out",
                  backgroundColor: "blue.600",
                }}
                size="lg"
                colorScheme={"blue"}
              >
                Explore Cars
              </Button>

              <Button
                as="a"
                href="/#learn"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                  backgroundColor: "blue.600",
                  borderColor: "blue.600",
                }}
                ml="18px"
                size="lg"
                colorScheme={"blue"}
                bg="transparent"
                border={"2px"}
                borderColor="blue.500"
              >
                Learn More
              </Button>
            </Flex>
          </VStack>
          <Image
            borderRadius={"md"}
            boxShadow={"2xl"}
            src="/dalle-car-natural-landing.png" // Replace this with a real image path
            alt="A beautiful car"
            maxW="350px"
          />
        </Flex>
      </Box>
      <Flex
      id="learn"
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        py="3rem"
       
      >
        <Heading  fontSize="5xl" textAlign={"center"}>What makes CARAVAN Unique?</Heading>
     
        <Flex
          direction={["column", "row"]}
          justifyContent="center"
          alignItems="center"
          mt="3rem"
        >
          <Box
            w="300px"
            pb="2rem !important"
            bgGradient="linear(to-br, blue.400, purple.700)"
            boxShadow="md"
            borderRadius="md"
            p="1rem"
            mr="2rem"
          >
            <Heading textAlign={"center"} fontSize="3xl">Enthusiastic Team </Heading>
            <Text mt="6px" textAlign={"center"}>
              We know what it&apos;s like to find the perfect car for you. Our team wants to help you find the perfect
              car.
            </Text>
          </Box>
          <Box
            w="300px"
            pb="2rem !important"
            bgGradient="linear(to-br, blue.400, purple.700)"
            boxShadow="md"
            borderRadius="md"
            p="1rem"
          >
            <Heading textAlign={"center"} fontSize="3xl">7-day return policy</Heading>
            <Text mt="6px" textAlign={"center"}>
              If you&apos;re not happy with your car, you can return it within 7
              days of purchase, or up to 500 miles, whichever comes first.

            </Text>
          </Box>
        </Flex>
           <Box
           mt="2rem"
            w="300px"
            pb="2rem !important"
         
            bgGradient="linear(to-br, blue.400, purple.700)"
            boxShadow="md"
            borderRadius="md"
            p="1rem"
            mr="1rem"
          >
            <Heading textAlign={"center"} fontSize="3xl">Unique Inventory </Heading>
            <Text mt="6px" textAlign={"center"}>
              We have a unique inventory of cars that you won&apos;t find anywhere else. Our cars range from
              vintage to modern, and everything in between.
            </Text>
          </Box>
      </Flex>
      <SalesTeam />
      <Cta />
      <Footer />
    </>
  );
}
