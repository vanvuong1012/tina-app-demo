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
            bgImage="url('https://static.vecteezy.com/system/resources/previews/004/493/179/non_2x/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-vector.jpg')"
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
                            color={mode("gray.700")}
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