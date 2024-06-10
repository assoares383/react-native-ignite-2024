import { useState } from 'react'

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/HighLight'

import { Container } from './styles'
import { FlatList } from 'react-native';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket 01', 'Galera da Rocket 02'])

  return (
    <Container>
      <Header />

      <Highlight 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
      />
    </Container>
  );
}