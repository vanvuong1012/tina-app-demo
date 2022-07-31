import {
  Box,
  Flex,
  Heading,
  LinkBox,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  chakra,
} from "@chakra-ui/react";

import Image from "next/image";

import { ArrowForwardIcon } from "@chakra-ui/icons";

export const FeaturedArticles = ({ data }) => {
  const FeaturedImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.500")}
      py={{
        base: "10",
        sm: "10",
      }}
    >
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Box flex="1" maxW={{ lg: "7xl" }} mb={9} mx="auto">
          <Heading
            as="h1"
            size="2xl"
            color={mode("blackAlpha.800", "purple.700")}
            mt="8"
            textAlign="left"
            fontWeight="extrabold"
          >
            {data.heading}
          </Heading>
          <Text
            textAlign="left"
            color={mode("gray.600", "gray.900")}
            pt="36px"
            mt="4"
            fontSize="lg"
            fontWeight="medium"
          >
            {data.subheading}
          </Text>
        </Box>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="12" mb="10">
          {data.items?.map((feature) => {
            const link = `/post/${feature.href}`;
            return (
              <Link
                href={link}
                key={feature.href}
                style={{ textDecoration: "inherit" }}
              >
                <Box
                  as="article"
                  bg={{ sm: mode("white", "gray.700") }}
                  shadow={{ sm: "base" }}
                  rounded={{ sm: "md" }}
                  overflow="hidden"
                  transition="all 0.2s"
                >
                  <Flex direction="column">
                    <Flex direction="column" px={{ sm: 6 }} py="5">
                      <Heading as="h2" size="md" mb="3" lineHeight="base" textAlign="center">
                        {feature?.title}
                      </Heading >
                        <hr  width="100%" align="center" />
                      <Text
                        pt="20px"
                        casing="uppercase"
                        letterSpacing="wider"
                        fontSize="lg"
                        color={mode("blue.400", "gray.400")}
                        fontWeight="semibold"
                        mb="2"
                        textDecoration="block"
                        
                      >
                        {feature?.link}
                      </Text>
                      <Flex
                        align="baseline"
                        justify="space-between"
                        fontSize="sm"
                        color={mode("gray.600", "gray.400")}
                      >
                        
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
       
      </Box>
    </Box>
  );
};