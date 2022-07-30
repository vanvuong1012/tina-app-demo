import {
    Box,
    Heading,
    Stack,
    Text,
    useColorModeValue as mode,
    chakra,
    baseStyle,
} from "@chakra-ui/react";

import Image from "next/image";

export const Hero = ({ data }) => {
    const { heading, subheading, image } = data;
    const CoverImg = chakra(Image, {
        shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
    })
    return (
        <Box
            as="section"
            bg={mode("gray.50", "gray.500")}
            pt={{ base: "0", md: "2", lg: "16" }}
            pb="24"
        >
            <Box
                height="40vh"
                maxW={{ base: "3xl", md: "7xl" }}
                mx="auto"
                px={{ base: "6", md: "8" }}
            >
                <Stack
                    direction={{ base: "column", lg: "row" }}
                    spacing={{ base: "2rem", lg: "2rem" }}
                    mt="8"
                    align={{ lg: "center" }}
                    justify="space-between"
                >
                    <Box flex="1" maxW={{ lg: "820px" }}>
                        <Heading
                            as="h1"
                            size="3xl"
                            color={mode("blue.600", "blue.300")}
                            mt={8}
                            fontWeight="extrabold"
                            letterSpacing="tight"
                        >
                            {heading}
                        </Heading>
                        <Text
                            maxW={{ lg: "560px" }}
                            color={mode("gray.600", "gray.400")}
                            pt="36px"
                            fontSize="2xl"
                            fontWeight="light"
                        >
                            {subheading}
                        </Text>
                        
                    </Box>
                    <Box
                        pos="absolute"
                        right="100px"
                        top="180px"
                        w={{ base: "full", md: "560px", lg: "560px" }}
                        h={{ base: "full", md: "360px", lg: "360px" }}
                    >
                        <Box>
                            {image && (
                                <CoverImg
                                    zIndex={1}
                                    width="560px"
                                    height="560px"
                                    quality={80}
                                    pos="relative"
                                    objectFit="cover"
                                    src={image}
                                    alt={heading}
                                />
                            )}
                        </Box>
                        
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}