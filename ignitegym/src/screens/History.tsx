import { useState } from 'react';
import { Heading, SectionList, Text, VStack } from 'native-base';

import { ScreenHeader } from '../components/ScreenHeader';
import { HistoryCard } from '../components/HistoryCard';

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "26.08.22",
            data: ["Puxada frontal", "Remada unilateral"]
        },
        {
            title: "27.08.22",
            data: ["Puxada frontal"]
        },
    ]);
    
    return (
        <VStack flex={1}>
            <ScreenHeader title="Historico de Exercicios" />

            <SectionList 
                sections={[]}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.100" fontSize="md" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={[].length === 0 && { flex: 1, justifyContent: 'center' }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Nao ha exercicios registrados ainda. {'\n'}
                        Vamos fazer exercicios hoje?
                    </Text>
                )}
            />
        </VStack>
    )
}