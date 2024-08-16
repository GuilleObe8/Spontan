import { Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Colors from "../../assets/Colors";

export default function CloseButton({ onPress, size = 12 }) {
  return (
    <Pressable onPress={onPress}>
      <Octicons
        name="x-circle-fill"
        size={size}
        color={Colors.secondaryLight}
      />
    </Pressable>
  );
}
