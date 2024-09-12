import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";

export default function CloseButton({ onPress, size = 12, circle = true }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name={circle ? "close-circle" : "close"}
        size={size}
        color={Colors.secondaryLight}
      />
    </Pressable>
  );
}
