import { Text, TextInput, TouchableOpacity, View } from "react-native";

import Participant from '../../components/Participant'

import styles from "./styles";

export default function Home() {
  const handleParticipantAdd = () => {
    console.log("Clicou no botao de adicionar");
  };

  const handleParticipantRemove = (name: string) => {
    console.log(`Voce clicou em remover o participante ${name}!!`);
  }

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

      <Participant name="Alexandre" onRemove={() => handleParticipantRemove("Alexandre")} />
    </View>
  );
}
