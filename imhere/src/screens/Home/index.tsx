import { useState } from 'react'
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
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Existe",
        "Ja existe um participante na lista com esse nome"
      );
    }

    setParticipants(preState => [...preState, participantName])
    setParticipantName('')
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
      },
      {
        text: "Nao",
        style: "cancel",
      },
    ]);
    console.log(`Voce clicou em remover o participante ${name}!!`);
  };

  // const handleSttate = (value: string) => {
  //   setParticipantName(value)
  //   console.log(participantName)
  // } 

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quarta, 29 de Maio de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#686B6B"
          onChangeText={setParticipantName}
          value={participantName}
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
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
