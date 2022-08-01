import {
    Box,
    Flex,
    Img,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue as mode,
    Link,
    chakra,
    baseStyle,
    Heading,
} from "@chakra-ui/react";

import Image from "next/image";

export const Information = ({ data }) => {
    const { heading, subheading, image, mapimage } = data;
    const CoverImg = chakra(Image, {
        shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
    })
    return (
        <Box
            as="section"
            bg={mode("white", "gray.400")}
            py={{
                base: "10",
                sm: "10",
            }}
        >
            <Box
                maxW={{
                    lg: "90%"
                }}
                mx="auto"
            >
                <Stack
                    direction={{ base: "column", lg: "row" }}
                    spacing={{ base: "2rem", lg: "2rem" }}

                    align={{ lg: "center" }}
                    justify="space-between"
                >
                    <Box flex="1" maxW={{ lg: "30%" }}>
                        <Box>
                            {image && (
                                <CoverImg
                                    zIndex={1}
                                    width="250px"
                                    height="180px"
                                    quality={80}
                                    pos="relative"
                                    objectFit="cover"
                                    src={image}
                                    alt={heading}
                                />
                            )}
                        </Box>

                        <Text
                            maxW={{ lg: "560px" }}
                            color={mode("gray.800", "gray.400")}
                            pt="36px"
                            fontSize="xl"
                            fontWeight="light"
                        >
                            {subheading}
                        </Text>
                        <Box>
                            <SimpleGrid spacing="6" columns={{ base: 1, lg: 2 }} pt="16" mx="2">
                                {data.items?.map((item) => {
                                    return (
                                        <Link
                                            key={item?.href}
                                            href={item?.href}
                                            style={{ textDecoration: "inherit" }}
                                        >
                                            <Box
                                                as="blockquote"
                                                rounded="2xl"
                                                bg={mode("white", "gray.700")}
                                                color={mode("gray.800", "white")}
                                                shadow="lg"
                                                px="10"
                                                py="8"
                                                mx={{ base: 2, lg: 0 }}
                                            >
                                                <Flex direction="column" pt="10px">
                                                    <Img
                                                        mt="-50%"
                                                        display="block"
                                                        ml="auto"
                                                        mr="auto"
                                                        bg={mode("white")}
                                                        objectFit="cover"
                                                        w="12"
                                                        h="12"
                                                        rounded="full"
                                                        color={mode("white", "gray.700")}
                                                        shadow="0 0 0 10px currentColor"
                                                        src={item?.image}
                                                        alt={item?.name}
                                                    />
                                                    <Text
                                                        as="cite"
                                                        textAlign="center"
                                                        fontStyle="normal"
                                                        fontSize="2xl"
                                                        fontWeight="extrabold"
                                                        color={mode("blue.500", "gray.400")}
                                                    >
                                                        {item?.name}
                                                    </Text>
                                                    <Text color={mode("gray.600", "gray.400")}
                                                        fontSize="large"
                                                        textAlign="center">
                                                        {item.decscription}
                                                    </Text>
                                                </Flex>

                                            </Box>
                                        </Link>
                                    );
                                })}
                            </SimpleGrid>
                        </Box>
                    </Box>

                    <Box flex="2"
                        display="flex"
                        flexDirection="row"
                        maxW={{ lg: "30%" }}
                    >
                        <Box flex="1" maxW={{ lg: "50%" }}>
                            <Heading
                                as="h2"
                                size="md"
                                color={mode("blue.300")}
                            >
                                NAVIGATE
                            </Heading>

                            <Box
                                display="flex"
                                flexDirection="column" pt="15px"
                                color={mode("gray.600")}
                                fontWeight="bold">
                                <Link href='#' pt="20px">
                                    Home
                                </Link>
                                <Link href='#' pt="20px">
                                    Meet Our Team
                                </Link>
                                <Link href='#' pt="20px">
                                    Our Services
                                </Link>
                                <Link href='#' pt="20px">
                                    Patient Info
                                </Link>
                                <Link href='#' pt="20px">
                                    Testimonials
                                </Link>
                                <Link href='#' pt="20px">
                                    Financial
                                </Link>
                                <Link href='#' pt="20px">
                                    Referring Doctors
                                </Link>
                                <Link href='#' pt="20px">
                                    Contact Us
                                </Link>
                            </Box>
                        </Box>

                        <Box flex="1" maxW={{ lg: "50%" }}>
                            <Heading
                                as="h2"
                                size="md"
                                color={mode("blue.300")}
                            >
                                CONTACT US
                            </Heading>

                            <Box
                                display="flex"
                                flexDirection="column" pt="15px"
                                color={mode("gray.500")}
                                fontWeight="bold">
                                <Link href='#' pt="20px">
                                    SF BAY ORAL SURGERY & DELTAL IMPLANT
                                </Link>
                                <Text pt="20px">
                                    901 Campus Drive, Suite 303 Daly City, Ca 94015
                                </Text>

                                <Text pt="20px">
                                    PHONE
                                </Text>
                                <Text
                                    fontWeight="extrabold"
                                    fontSize="2xl"
                                    color={mode("orange.300")}
                                >
                                    (650) 992-7874
                                </Text>

                                <Text pt="20px">
                                    FAX
                                </Text>
                                <Text
                                    fontWeight="extrabold"
                                    fontSize="lg"
                                    color={mode("gray")}
                                >
                                    650-992-5902
                                </Text>

                                <Text pt="20px">
                                    Email
                                </Text>
                                <Text
                                    fontWeight="extrabold"
                                    fontSize="lg"
                                    color={mode("gray")}
                                >
                                    infor@sfbayos.com
                                </Text>
                            </Box>
                        </Box>

                    </Box>

                    <Box flex="1" maxW={{ lg: "40%" }} textAlign="center">
                        <Box
                        >
                            {mapimage && (
                                <CoverImg
                                    zIndex={1}
                                    width="350px"
                                    height="280px"
                                    src={mapimage}

                                />
                            )}

                            <Text
                                fontWeight="extrabold"
                                fontSize="xl"
                                color={mode("gray.400")}
                            >
                                Follow Us on Social Media
                            </Text>
                        </Box>



                    </Box>

                </Stack>
            </Box>
        </Box>
    )
}