import { Heading, HStack, VStack, Text } from "native-base";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto 
                source={{ uri: 'https://avatars.githubusercontent.com/u/15836394?v=4' }}
                alt="Imagem do Usuario"
                size={16}
                mr={4}
            />
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