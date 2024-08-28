import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";

export default function CloseButton({ onPress, size = 12 }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="close" size={size} color={Colors.secondaryLight} />
    </Pressable>
  );
}
