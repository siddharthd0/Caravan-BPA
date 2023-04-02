import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";

const IndexPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  const {
    isOpen: BookSuccess,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });
  const toast = useToast();
  const handleContact = () => {
    toast({
      description:
        "Thank you for contacting us. We will get back to you shortly.",
      status: "success",
      duration: 7000,
      isClosable: true,
      position: "top",
    });
  };
  const handleBooking = () => {
    onOpen();
    toast({
      description:
        "Thank you for booking the appointment. We look forward to seeing you.",
      status: "success",
      duration: 7000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Container mb="3rem">
      <VStack spacing={4} marginTop={10}>
        <Heading>Contact Us</Heading>
        <Tabs width="100%" isFitted variant="enclosed">
          <TabList>
            <Tab>Message Caravan</Tab>
            <Tab>Book an Appointment</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box
                mt="1rem"
                width="100%"
                p={4}
                borderRadius="md"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                bgGradient="linear(to-tr, gray.700, gray.900)"
              >
                <form onSubmit={formik.handleSubmit}>
                  <VStack spacing={4} alignItems="stretch">
                    <FormControl
                      isInvalid={formik.touched.name && formik.errors.name}
                    >
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Your name"
                        {...formik.getFieldProps("name")}
                      />
                      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={formik.touched.email && formik.errors.email}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Your email"
                        {...formik.getFieldProps("email")}
                      />
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.subject && formik.errors.subject
                      }
                    >
                      <FormLabel>Subject</FormLabel>
                      <Input
                        type="text"
                        placeholder="Subject"
                        {...formik.getFieldProps("subject")}
                      />
                      <FormErrorMessage>
                        {formik.errors.subject}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.message && formik.errors.message
                      }
                    >
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        placeholder="Your message"
                        {...formik.getFieldProps("message")}
                      />
                      <FormErrorMessage>
                        {formik.errors.message}
                      </FormErrorMessage>
                    </FormControl>
                    <Button
                      onClick={handleContact}
                      colorScheme="blue"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </TabPanel>
            <TabPanel>
              <Flex marginY={"100px"} direction={"column"}>
                <Flex
                direction="column"
                  mb="5rem"
                  width="100%"
                  p={4}
                  borderRadius="md"
                  boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                  bgGradient="linear(to-tr, gray.700, gray.900)"
                >
                  <Input
                    color={"white !important"}
                    margin="auto"
                    border="none"
                    placeholder="Select Date and Time"
                    size="lg"
                    type="datetime-local"
                  />
                  <Button
                    ml="10px"
                    px="32px"
                    borderRadius="10px"
         
                    marginTop={3}

                    rightIcon={<BsArrowRight position={"relative"} />}
                    onClick={handleBooking}
                    colorScheme="blue"
                  >
                    Book now
                  </Button>
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default IndexPage;
