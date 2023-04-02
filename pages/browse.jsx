import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  VStack,
  Flex,
  Spacer,
  HStack,
  Text,
  Image,
  Badge,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/footer";

const carData = [
  {
    name: "Toyota Camry",
    image: "/tt1.png",
    images: ["/tt1.png", "/tt2.png", "/tt3.png", "tt4.png"],
    year: 2020,
    make: "Toyota",
    miles: 15000,
    price: "$25,000",
    description:
      "A reliable and fuel-efficient midsize sedan with a comfortable interior. The Toyota Camry has a spacious cabin and a large trunk, making it perfect for families and road trips. The car is equipped with modern safety features and offers a smooth, quiet ride. The fuel economy is excellent, making it a popular choice for those looking to save on gas.",
    condition: "used",
  },
  // Add more car data here
  {
    name: "Honda Accord",
    image: "/hondaac.png",
    images: [
      "/hondaac.png",
      "/hondaac2.png",
      "/hondaac3.png",
      "/hondaac4.png",
  
    ],
    year: 2021,
    make: "Honda",
    miles: 8000,
    price: "$30,000",
    description:
      "A popular midsize sedan offering a smooth ride and advanced safety features. The Honda Accord is known for its stylish design, comfortable interior, and excellent driving dynamics. With a strong engine and responsive handling, the Accord provides an engaging driving experience. The car also comes with a suite of advanced safety features, ensuring a secure ride for you and your passengers.",
    condition: "used",
  },
  {
    name: "Tesla Model 3",
    image: "/tesla.png",
    images: ["/tesla.png", "/tesla2.png", "/tesla3.png", "tesla1.png"],
    year: 2021,
    make: "Tesla",
    miles: 5000,
    price: "$45,000",
    description:
      "A stylish and high-performance electric vehicle offering a smooth and comfortable ride. The Tesla Model 3 comes with an impressive range and advanced technology features. With its sleek design and incredible acceleration, this car is a joy to drive. The Model 3 also features a minimalist interior with a large touchscreen display, making it a top choice for tech-savvy drivers.",
    condition: "used",
  },
  {
    name: "Ford F-150",
    image: "/truck.png",
    images: ["/truck.png", "/truck2.png", "/truck3.png", "truck1.png"],
    year: 2019,
    make: "Ford",
    miles: 25000,
    price: "$35,000",
    description:
      "A versatile and powerful pickup truck that's perfect for both work and play. The Ford F-150 offers a comfortable ride and a spacious, well-appointed interior. With its strong towing and hauling capabilities, the F-150 is a top choice for those in need of a capable workhorse. The truck also offers a range of advanced safety and technology features, ensuring a secure and enjoyable ride.",
    condition: "used",
  },
  {
    name: "BMW 3 Series",
    image: "/bmw.png",
    images: ["/bmw.png", "/bmw2.png", "/bmw3.png", "bmw1.png"],
    year: 2021,
    make: "BMW",
    miles: 10000,
    price: "$42,000",
    description:
    "A luxury sports sedan that offers a perfect blend of comfort, style, and performance. The BMW 3 Series features a sophisticated and elegant design with a spacious and well-appointed interior. The car offers a smooth and comfortable ride, with agile handling and a range of powerful engine options. With its advanced technology and safety features, the 3 Series is a top choice for those seeking a refined driving experience.",
    condition: "used",
    },
        {
    name: "Audi A4",
    image: "/audi.png",
    images: ["/audi.png", "/audi2.png", "/audi3.png", "audi1.png"],
    year: 2020,
    make: "Audi",
    miles: 12000,
    price: "$38,000",
    description:
    "A stylish and sophisticated luxury sedan that delivers a comfortable and engaging driving experience. The Audi A4 features a sleek design and a high-quality interior with advanced technology features. The car offers a smooth ride and responsive handling, making it a pleasure to drive. With its range of efficient engine options and advanced safety features, the A4 is a top choice for those seeking luxury and performance.",
    condition: "used",
    },
];

const BrowseCars = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCar, setSelectedCar] = React.useState(null);

  const openDrawer = (car) => {
    setSelectedCar(car);
    onOpen();
  };

  return (
    <>
    <Box mb="3rem">
      <Container maxW="container.lg" py={10}>
        <Heading as="h1" size="2xl" mb={3} textAlign="center">
          Browse Cars
        </Heading>
        <Text textAlign="center" color="gray.200" mb="1.5rem"> 
          Find your next car from our wide selection of used cars. We have a
          variety of makes and models to choose from, including popular brands
          like Toyota, Honda, Ford, and BMW. Our used cars are in excellent
          condition and come with a free CARAVAN 6 month warranty.
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={8}
        >
          {carData.map((car, index) => (
            <GridItem key={index}>
              <VStack
                borderRadius="lg"
                boxShadow="md"
                overflow="hidden"
                bg="gray.800"
                spacing={0}
                align="start"
                p={4}
              >
                <Image mb="10px" borderRadius="md" src={car.image} alt={car.name} objectFit="cover" />
                <VStack align="start" spacing={2}>
                  <HStack>
                    <Text mr="2rem" fontWeight="bold" fontSize="xl">
                      {car.name}
                    </Text>
                    <Spacer />
                    <HStack>
                      <Badge>{car.year}</Badge>
                      <Badge
                        colorScheme={car.condition === "used" ? "red" : "green"}
                      >
                        {car.condition}
                      </Badge>
                    </HStack>
                  </HStack>

                  <Text fontWeight="bold" fontSize="lg" color="blue.500">
                    {car.price}
                  </Text>
                  <Text fontSize="sm" noOfLines={2}>
                    {car.description}
                  </Text>
                </VStack>
                <HStack mt="auto">
                  <Button
                    mt="12px"
                    size="sm"
                    colorScheme="blue"
                    onClick={() => openDrawer(car)}
                  >
                    View Details
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" size="md">
        <DrawerOverlay />
        <DrawerContent pb="2rem" bg="black">
          <DrawerCloseButton />
          <DrawerHeader fontSize="3xl" border="none" borderBottomWidth="1px">
            {selectedCar?.year} {selectedCar?.name}   <Button colorScheme="blue" ml="1.5rem">Book an Appointment</Button>
          </DrawerHeader>
         
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Flex>
                {selectedCar?.images.map((image, index) => (
                  <Image
                    maxW="300px"
                    key={index}
                    src={image}
                    alt={`${selectedCar?.name} image ${index + 1}`}
                    objectFit="cover"
                  />
                ))}
              </Flex>
              <HStack>
                <Badge fontSize="md" colorScheme="teal">
                  {selectedCar?.price}
                </Badge> 
                <Badge colorScheme="blue" fontSize="md">
                  {selectedCar?.miles?.toLocaleString()} miles
                </Badge>
                <Badge
                fontSize="md"
                colorScheme={
                  selectedCar?.condition === "used" ? "red" : "green"
                }
              >
                {selectedCar?.condition}
              </Badge>
              <Badge fontSize="md" colorScheme="purple">
                {selectedCar?.make}
              </Badge>
              </HStack>
              <Text fontSize="md">{selectedCar?.description}</Text>
             
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
    <Footer/>
  </>
  );
};

export default BrowseCars;
