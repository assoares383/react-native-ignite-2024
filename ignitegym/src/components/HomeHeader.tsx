import { Heading, HStack, VStack, Text } from "native-base";

export function HomeHeader() {
    return (
        <HStack>
            <VStack>
                <Text color="gray.100">
                    Ola, 
                </Text>

                <Heading color="gray.100">
                    Alexandre
                </Heading>
            </VStack>
        </HStack>
    )
}