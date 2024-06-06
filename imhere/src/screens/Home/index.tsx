import {
  FlatList,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Participant from "../../components/Participant";

import styles from "./styles";

export default function Home() {
  const participants = [
    "Alexandre",
    "Leticia",
    "Maria",
    "Jose",
    "Manoel",
    "Laura",
    "Fabio",
    "Douglas",
    "Mara",
    "Simone",
    "Leandro",
    "Marcos",
  ];

  const handleParticipantAdd = () => {
    if(participants.includes("Alexandre")) {
      return Alert.alert("Participante Existe", "Ja existe um participante na lista com esse nome")
    }

    console.log("Clicou no botao de adicionar");
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])
    console.log(`Voce clicou em remover o participante ${name}!!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quarta, 29 de Maio de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#686B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />
    </View>
  );
}
