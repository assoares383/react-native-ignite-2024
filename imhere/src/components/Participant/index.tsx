import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface INameProps {
  name: string
  onRemove: () => void
}

export default function Participant({ name, onRemove }: INameProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
