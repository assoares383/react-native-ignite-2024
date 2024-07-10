import { TouchableOpacity } from "react-native";
import { Heading, HStack, Icon, VStack, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from "../hooks/useAuth";

import userPhotoDefault from '../assets/userPhotoDefault.png'

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    const { user } = useAuth();

    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto 
                source={user.avatar ? { uri: user.avatar } : userPhotoDefault}
                alt="Imagem do Usuario"
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">
                    Ola, 
                </Text>

                <Heading color="gray.100" fontSize="md">
                    { user.name }
                </Heading>
            </VStack>
            
            <TouchableOpacity>
                <Icon 
                    as={MaterialIcons}
                    name="logout" color="gray.200"
                    size={7}
                />
            </TouchableOpacity>
        </HStack>
    )
}