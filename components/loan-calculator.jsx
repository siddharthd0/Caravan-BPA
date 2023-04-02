import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const IndexPage = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const rate = interestRate / 100 / 12;
    const term = loanTerm * 12;
    const factor =
      (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    const payment = loanAmount * factor;
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <>
      <Heading mt="3rem" textAlign="center">
        Car Loan Calculator
      </Heading>
      <Container
        mt="2rem !important"
        width="100%"
        py={"2rem"}
        px="1rem"
        borderRadius="md"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
        bgGradient="linear(to-tr, gray.700, gray.900)"
        backgroundColor={"gray.900"}
        margin="auto" maxW="500px"
      >
        <VStack >
          <FormControl>
            <FormLabel>Loan Amount</FormLabel>
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Interest Rate (%)</FormLabel>
            <Slider
              value={interestRate}
              onChange={(value) => setInterestRate(value)}
              min={0}
              max={20}
              step={0.01}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text textAlign="center" fontWeight="bold">
              {interestRate.toFixed(2)}%
            </Text>
          </FormControl>
          <FormControl>
            <FormLabel>Loan Term (Years)</FormLabel>
            <Input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </FormControl>
          <Button mt="1rem !important" width="100%" colorScheme={"blue"} onClick={calculateLoan}>
            Calculate
          </Button>
          {monthlyPayment > 0 && (
            <Text fontSize="xl" fontWeight="bold">
              Monthly Payment: ${monthlyPayment}
            </Text>
          )}
        </VStack>
      </Container>
    </>
  );
};

export default IndexPage;
