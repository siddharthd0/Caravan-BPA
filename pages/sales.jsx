import Head from "next/head";
import RepCard from "../components/reps-card";
import {
  Wrap,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};
export default function SalesReps() {
  const bgGradient = useColorModeValue(
    "linear(to-tr, blackAlpha.800, blackAlpha.600)"
  );

  return (
    <>
      <Flex  className="caravan-sales" zIndex={"-2"} marginTop="-5rem">
        <Box className="caravan-sales" w="100%">
          <MotionBox
            position="relative"
            borderRadius="md"
            boxShadow="xl"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 1 }}
            className="caravan-sales"
          >
            <Image
              className="caravan-sales"
              width={"100%"}
              src="/highway-banner.png"
            />
            <MotionBox
              className="caravan-sales"
              position="absolute"
              top="40%"
              left="33%"
              direction={"column"}
              maxWidth="500px"
              px="2rem"
              py="1.5rem"
              bgGradient={bgGradient}
              borderRadius="md"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <MotionHeading
                color="white"
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Meet Our Sales Representatives
              </MotionHeading>
              <MotionText
                color="white"
                marginTop={"10px"}
                fontSize={{ base: "sm", md: "md" }}
              >
                Caravan is a family-owned business that has been in the car
                business for over 50 years. We have a team of dedicated sales
                representatives who are passionate about helping you find the
                perfect car.
              </MotionText>
            </MotionBox>
          </MotionBox>
        </Box>
      </Flex>
      <Wrap
      mb="5rem !important"
      pb="5rem"
        justifyContent={"center"}
        spacing="30px"
        maxWidth="800px"
        margin="auto!important"
        mt={"5rem!important"}
        ml={["3rem !important", "auto!important"]}
      >
        <RepCard
          image="/janedoe.png"
          name={"Jane Doe"}
          email="JaneDoe@caravan.com"
          description={
            "Jane Doe is a dedicated sales representative who is passionate about helping you find the perfect car."
          }
        />
        <RepCard
          image="./john.png"
          name={"John Smith"}
          email="JohnSmith@caravan.com"
          description={
            "John Smith is a knowledgeable sales representative who will guide you through the car-buying process with ease."
          }
        />
        <RepCard
          image="/alice.png"
          name={"Alice Johnson"}
          email="AliceJohnson@caravan.com"
          description={
            "Alice Johnson is an experienced sales representative who specializes in finding the best deals on high-quality vehicles."
          }
        />
        <RepCard
          image="./bob.png"
          name={"Bob Martin"}
          email="BobMartin@caravan.com"
          description={
            "Bob Martin is a veteran sales representative who focuses on customer satisfaction and finding the ideal car for your needs."
          }
        />
      </Wrap>
      <Footer />
    </>
  );
}
