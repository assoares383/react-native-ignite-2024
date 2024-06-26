import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base';

import { AppNavigatorRoutesProp } from '../routes/app.routes';

import { ExerciseCard } from '../components/ExerciseCard';
import { Group } from '../components/Group';
import { HomeHeader } from '../components/HomeHeader';

export function Home() {
    const [groups, setGroups] = useState(['Costas', 'Biceps', 'Triceps', 'Ombro']);
    const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada Unilateral', 'Levantamento terras']);
    const [groupSelected, setGroupSelected] = useState('Costas');

    const navigation = useNavigation<AppNavigatorRoutesProp>();
    
    function handleOpenExerciseDetail() {
        navigation.navigate('exercise');
    }

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