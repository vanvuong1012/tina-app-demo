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

export const ContactUs = ({ data }) => {
    const { heading } = data;

    return (
        <Box
            as="section"
            bgImage="url('https://ik.imagekit.io/5xp2dtukdiubl/wp-content/uploads/2019/08/Corporate-Benh-Vien-Gia-An-8-1968x1000.jpg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            pt={{ base: "0", md: "2", lg: "16" }}
            pb="24"
        >
            <Box
                height="30vh"
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
                            as="h1"
                            size="2xl"
                            mt="15vh"
                            color={mode("gray.900")}
                            textAlign="center"
                            fontWeight="extrabold"
                            
                        >
                            Do you have question?<br/>
                            {heading}
                        </Heading>


                    </Box>

                </Stack>
            </Box>
        </Box>
    )
}