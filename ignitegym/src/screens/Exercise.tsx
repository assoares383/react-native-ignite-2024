import { TouchableOpacity } from 'react-native';
import { HStack, Heading, Icon, Image, Text, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import { AppNavigatiorRoutesProps } from '@routes/app.routes'

import BodySvg from '@assets/body.svg';

export function Exercise() {
    const navigation = useNavigation<AppNavigatiorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();    
    }

    return (
        <VStack flex={1}>
            <VStack px={8} pt={12} bg="gray.600">
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1}>
                        Puxada frontal
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.200" mt={1} textTransform="capitalize">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <VStack p={8}>
                <Image 
                    source={{ 
                        uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'
                    }}
                    alt="Imagem do exercicio"
                    mb={3}
                    w="full"
                    h="80"
                    resizeMode='cover'
                    rounded="lg"
                />
            </VStack>
        </VStack>
    )
}