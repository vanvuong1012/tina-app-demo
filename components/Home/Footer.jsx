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

export const Footer = ({ data }) => {
    const { content } = data;

    return (
        <Box
            as="section"
            bg={mode("gray.100")}
            
        >
            <Box
                height="50px"
                maxW={{ base: "3xl", md: "7xl" }}
                mx="auto"
                px={{ base: "6", md: "8" }}
            >
                <Stack
                    direction={{ base: "column", lg: "row" }}
                    align={{ lg: "center" }}
                    justify="space-between"
                >
                    <Box flex="1" >
                        <Heading
                            as="p"
                            size="sm"
                            color={mode("gray.700")}
                            textAlign="center"
                            lineHeight="50px"
                            
                        >
                           
                            {content}
                        </Heading>


                    </Box>

                </Stack>
            </Box>
        </Box>
    )
}