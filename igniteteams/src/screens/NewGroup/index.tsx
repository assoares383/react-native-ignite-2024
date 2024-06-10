import { Container, Content, Icon } from './styles'

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/HighLight';

export default function NewGroup() {
  return (
    <Container>
        <Header showBackButton />
        <Content>
            <Icon />

            <Highlight 
                title='Nova Turma'
                subtitle='Crie a turma para adicionar as pessoas'
            />

            <Button 
                title="Criar"
            />
        </Content>
    </Container>
  );
}