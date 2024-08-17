import { Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default function RoundedTextButton({
  onPress,
  color = Colors.lightGrey,
  text,
  textSize = 15,
  paddingHorizontal = 26,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            paddingHorizontal: paddingHorizontal,
            fontSize: textSize,
            lineHeight: 2 * textSize,
          },
          // { fontSize: textSize },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    elevation: 3,
  },
  buttonText: {
    color: Colors.backgroundBlack,
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});
