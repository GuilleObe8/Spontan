import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";

export default function Slider({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name="chevron-down" size={24} color={Colors.secondaryLight} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginBottom: 20,
  },
});
