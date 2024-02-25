import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Container, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const backgroundColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={backgroundColor} minH="100vh">
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={{ base: 10, md: 20 }} px={4}>
          <VStack align="flex-start" spacing={5} maxW={{ md: "50%" }}>
            <Heading as="h1" size="2xl" fontWeight="bold" color={textColor}>
              MAYA XR
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Dive into the future of immersive experiences with our cutting-edge XR and AI solutions.
            </Text>
            <Button size="lg" colorScheme="teal" rightIcon={<FaArrowRight />}>
              Explore Our Work
            </Button>
          </VStack>

          <Spacer />

          <Box flexShrink={0} mt={{ base: 10, md: 0 }}>
            <Image borderRadius="lg" src="https://images.unsplash.com/photo-1612066473428-fb6833a0d855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNzA4ODk0ODY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Virtual Reality Experience" objectFit="cover" boxSize={{ base: "100%", md: "sm" }} />
          </Box>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={{ base: 10, md: 20 }} px={4}>
          <VStack align="flex-start" spacing={5} maxW={{ md: "50%" }}>
            <Heading as="h2" size="xl" fontWeight="semibold" color={textColor}>
              Innovative AI Tools
            </Heading>
            <Text fontSize="lg" color={textColor}>
              Boost your business efficiency with our AI-driven analytics and automation tools.
            </Text>
            <Button size="lg" colorScheme="blue" rightIcon={<FaArrowRight />}>
              Learn More
            </Button>
          </VStack>

          <Spacer />

          <Box flexShrink={0} mt={{ base: 10, md: 0 }}>
            <Image borderRadius="lg" src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTcwODg5NDg2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Artificial Intelligence" objectFit="cover" boxSize={{ base: "100%", md: "sm" }} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
