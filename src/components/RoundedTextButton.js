import Colors from "@assets/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RoundedTextButton({
  onPress,
  color = Colors.lightGrey,
  text,
  icon,
  textSize = 15,
  paddingHorizontal = 26,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <View style={styles.container}>
        <Text
          style={[
            styles.buttonText,
            {
              paddingHorizontal: paddingHorizontal,
              fontSize: textSize,
              lineHeight: 2 * textSize,
            },
          ]}
        >
          {text}
        </Text>
        {icon}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    elevation: 3,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.backgroundBlack,
    fontFamily: "HelveticaNeue-BoldItalic",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
