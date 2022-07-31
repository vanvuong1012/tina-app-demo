// import {
//     Box,
//     Flex,
//     Stack,
//     Img,
//     Heading,
//     Text,
//     SimpleGrid,
//     useColorModeValue as mode,
//     Link,
// } from "@chakra-ui/react";

// export const Projects = ({ data }) => {
//     return (
//         <Box
//             as="section"
//             bg={mode("gray.700", "gray.500")}
//             pt={{ base: "0", md: "2", lg: "16" }}
//             pb="24"
//         >
//             <Box
//                 height="40vh"
//                 maxW={{ base: "3xl", md: "7xl" }}
//                 mx="auto"
//                 px={{ base: "6", md: "8" }}
//             >
//                 <Stack
//                     direction={{ base: "column", lg: "row" }}
//                     spacing={{ base: "2rem", lg: "2rem" }}
//                     mt="8"
//                     align={{ lg: "center" }}
//                     justify="space-between">
//                     <Box flex="1" maxW={{ lg: "5xl" }} >
//                         <Heading
//                             as="h1"
//                             size="2xl"
//                             color={mode("blackAlpha.800", "purple.700")}
//                             mt="8"
//                             textAlign="left"
//                             fontWeight="extrabold"
//                         >
//                             {data.heading}
//                         </Heading>
//                         <Text
//                             textAlign="left"
//                             color={mode("gray.600", "gray.900")}
//                             pt="36px"
//                             mt="4"
//                             fontSize="lg"
//                             fontWeight="medium"
//                         >
//                             {data.subheading}
//                         </Text>
//                     </Box>
//                 </Stack>
//                 <SimpleGrid spacing="14" columns={{ base: 1, lg: 1 }} mx="4" pt="36px">
//                     {data.items?.map((item) => {
//                         return (
//                             <Link
//                                 key={item?.href}
//                                 href={item?.href}
//                                 style={{ textDecoration: "inherit" }}
//                             >
//                                 <Box
//                                     as="blockquote"
//                                     rounded="2xl"
//                                     bg={mode("white", "gray.700")}
//                                     color={mode("gray.800", "white")}
//                                     shadow="lg"
//                                     px="10"
//                                     py="8"
//                                     mx={{ base: 2, lg: 0 }}
//                                 >
//                                     <Flex >
//                                         <Img

//                                             bg={mode("white", "gray.700")}
//                                             objectFit="cover"
//                                             w="24"
//                                             h="24"
//                                             rounded="full"
//                                             color={mode("white", "gray.700")}
//                                             shadow="0 0 0 10px currentColor"
//                                             src={item?.image}
//                                             alt={item?.name}
//                                         />
//                                         <Box marginStart="5">
//                                             <Text
//                                                 as="cite"
//                                                 fontStyle="normal"
//                                                 fontSize="md"
//                                                 fontWeight="extrabold"
//                                             >
//                                                 {item?.name}
//                                             </Text>

//                                             <Text color={mode("gray.600", "gray.400")}>
//                                                 {item.decscription}
//                                             </Text>
//                                         </Box>

//                                     </Flex>

//                                 </Box>
//                             </Link>
//                         );
//                     })}
//                 </SimpleGrid>
//             </Box>
//         </Box>
//     )
// }

import {
    Box,
    Flex,
    Img,
    Heading,
    Text,
    SimpleGrid,
    useColorModeValue as mode,
    Link,
} from "@chakra-ui/react";

export const Projects = ({ data }) => {
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
                    base: "xl",
                    md: "7xl",
                }}
                mx="auto"
            >
                <Box flex="1" maxW={{ lg: "7xl" }} mb={9} mx="auto">
                    <Heading
                            as="h1"
                            size="2xl"
                            color={mode("blackAlpha.800", "purple.700")}
                            pt="20"
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
                <SimpleGrid spacing="14" columns={{ base: 1, lg: 1 }} mx="4">
                    {data.items?.map((item) => {
                        return (
                            <Link
                                key={item?.href}
                                href={item?.href}
                                style={{ textDecoration: "inherit" }}
                            >
                                <Box
                                    as="blockquote"
                                    bg={mode("gray.200", "gray.700")}
                                    color={mode("gray.800", "white")}
                                    shadow="lg"
                                    px="10"
                                    py="8"
                                    mx={{ base: 2, lg: 0 }}
                                >
                                    <Flex>
                                        <Img
                                            
                                            bg={mode("white", "gray.700")}
                                            objectFit="cover"
                                            w="24"
                                            h="24"
                                            rounded="full"
                                            color={mode("white", "gray.700")}
                                            src={item?.image}
                                            alt={item?.name}
                                        />
                                        <Box marginStart="5">
                                            <Text
                                                as="cite"
                                                fontStyle="normal"
                                                fontSize="3xl"
                                                fontWeight="extrabold"
                                                color={mode("blue.500", "gray.400")}
                                            >
                                                {item?.name}
                                            </Text>
                                            <Text color={mode("gray.600", "gray.400")}
                                            fontSize="2xl">
                                                {item.decscription}
                                            </Text>
                                        </Box>
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