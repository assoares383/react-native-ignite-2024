import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Icon, Image, VStack, Text } from "native-base";
import { Entypo } from '@expo/vector-icons'

import { api } from '../services/api';

import { ExerciseDTO } from "../dtos/ExerciseDTO";

type Props = TouchableOpacityProps & {
    data: ExerciseDTO;
}

export function ExerciseCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image 
                    source={{ 
                        uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`
                    }}
                    alt={data.name}
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize="lg" color="white">
                        {data.name}
                    </Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
                        {data.series} series x {data.repetitions} repeticoes
                    </Text>
                </VStack>

                <Icon as={Entypo} name="chevron-right" color="gray.300" />
            </HStack>
        </TouchableOpacity>
    );
}