import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { NavContent } from "./NavContent";

export const Navbar = () => (
  <Box>
    <Box
      as="header"
      height="28"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray", "gray.800")}
      position="relative"
    >
      <Box
        height="100%"
        maxW="fit-content"
        mx="auto"
        ps={{
          base: "6",
          md: "8",
        }}
        pe={{
          base: "5",
          md: "0",
        }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          <Box as="a" href="/" rel="home" pr="15vh">
            <Text
              h="6"
              fontSize="1.5rem"
              fontWeight="bold"
              color={useColorModeValue("primary.900", "primary.200")}
            >
              SF BAY
            </Text>
          </Box>
          <NavContent.Desktop
            display={{
              base: "none",
              md: "flex",
            }}
          />
          <NavContent.Mobile
            display={{
              base: "flex",
              md: "none",
            }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
);