import {
    Box,
    Heading,
    Flex,
    Stack,
    Text,
    SimpleGrid,
    useColorModeValue as mode,
    chakra,
    baseStyle,
} from "@chakra-ui/react";



export const FinancialAndInsuarance = ({ data }) => {
    const { heading } = data;

    return (
        <Box
            as="section"
            bg={mode("white", "gray.500")}
            pt={{ base: "0", md: "2", lg: "16" }}
            pb="24"
        >
            <Box
                height="auto"
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
                    <Box flex="1" >
                        <Heading
                            as="h1"
                            size="2xl"
                            color={mode("blackAlpha.800", "blue.300")}
                            mt={8}
                            fontWeight="extrabold"
                            letterSpacing="tight"
                        >
                            {heading}
                        </Heading>
                        <SimpleGrid spacing="14" columns={{ base: 1, lg: 1 }} pt="36px" >
                            {data.items?.map((item) => {
                                return (

                                   
                                        <Flex>

                                            <Box >

                                                <Text color={mode("gray.600", "gray.400")}
                                                    fontSize="2xl">
                                                    {item.content}
                                                </Text>
                                            </Box>
                                        </Flex>

                                  

                                );
                            })}
                        </SimpleGrid>

                    </Box>



                </Stack>
            </Box>
        </Box>
    )
}