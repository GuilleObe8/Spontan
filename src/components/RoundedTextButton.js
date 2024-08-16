import { Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default function RoundedTextButton({
  onPress,
  color = Colors.lightGrey,
  text,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    borderRadius: 16,
    elevation: 3,
  },
  buttonText: {
    fontSize: 11,
    lineHeight: 22,
    color: Colors.backgroundBlack,
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});
