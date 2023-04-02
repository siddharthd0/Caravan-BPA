import {
    Box,
    Heading,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
  } from "@chakra-ui/react";
  import Footer from "../components/footer";
  
  const FAQPage = () => {
    const faqs = [
      {
        question: "What types of cars do you offer?",
        answer: "We offer a wide range of cars, including sedans, SUVs, trucks, and more. We also feature various makes and models to suit your preferences.",
      },
      {
        question: "How can I schedule a test drive?",
        answer: "To schedule a test drive, please visit our Contact page and book an appointment with our sales team.",
      },
      {
        question: "Do you offer financing options?",
        answer: "Yes, we offer various financing options to cater to our customers' needs. You can use our Loan Estimator tool to calculate potential financing terms.",
      },
      {
        question: "What is your return policy?",
        answer: "We want you to be completely satisfied with your purchase. If you're not happy with your new car, you can return it within seven days or 500 miles, whichever comes first.",
      },
      {
        question: "How can I contact you?",
        answer: "You can contact us by filing out the form in our Contact page",
      }
    
    ];
  
    return (
      <>
      <Box mb="10rem">
        <Container maxW="container.lg" py={10}>
          <Heading mt="3rem" as="h1" size="2xl" mb={6} textAlign="center">
            Frequently Asked Questions
          </Heading>
          <Accordion margin="auto" maxW="500px" allowToggle>
            {faqs.map((faq, index) => (
              <AccordionItem border="none" key={index}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>
      <Footer/>
      </>
    );
  };
  
  export default FAQPage;
  