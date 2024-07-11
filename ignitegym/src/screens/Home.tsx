import { useCallback, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList, HStack, Heading, Text, VStack, useToast } from 'native-base';

import { api } from '../services/api';
import { AppError } from '../utils/AppError';
import { ExerciseDTO } from '../dtos/ExerciseDTO';

import { AppNavigatorRoutesProp } from '../routes/app.routes';

import { ExerciseCard } from '../components/ExerciseCard';
import { Group } from '../components/Group';
import { HomeHeader } from '../components/HomeHeader';

export function Home() {
    const [groups, setGroups] = useState<string[]>([]);
    const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
    const [groupSelected, setGroupSelected] = useState('Costas');

    const toast = useToast();
    const navigation = useNavigation<AppNavigatorRoutesProp>();
    
    function handleOpenExerciseDetail() {
        navigation.navigate('exercise');
    }

    async function fetchGroups() {
        try {
            const response = await api.get('/groups');
            setGroups(response.data)
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Nao foi possivel carregar os grupos musculares';

            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            })
        }
    }

    async function fetchExercisesByGroup() {
        try {
            const response = await api.get(`/exercises/bygroup/${groupSelected}`);
            setExercises(response.data)
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Nao foi possivel carregar os exercicios musculares';

            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            })
        }
    }

    useEffect(() => {
        fetchGroups();
        fetchExercisesByGroup();
    }, []);

    useFocusEffect(useCallback(() => {
        fetchExercisesByGroup();
    }, [groupSelected]))

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group  
                        name={item}
                        isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md">
                        Exercicios
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList 
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard 
                            onPress={handleOpenExerciseDetail}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    )
}