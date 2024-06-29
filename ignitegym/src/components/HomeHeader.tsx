import { Heading, HStack, VStack, Text } from "native-base";

export function HomeHeader() {
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <VStack>
                <Text color="gray.100" fontSize="md">
                    Ola, 
                </Text>

                <Heading color="gray.100" fontSize="md">
                    Alexandre
                </Heading>
            </VStack>
        </HStack>
    )
}