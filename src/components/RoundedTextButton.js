import Colors from "@assets/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RoundedTextButton({
  onPress,
  color = Colors.lightGrey,
  text,
  icon,
  textSize = 15,
  textColor = Colors.backgroundBlack,
  paddingHorizontal = 26,
  elevation = 3,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{ borderRadius: 16, elevation: elevation, backgroundColor: color }}
    >
      <View style={styles.container}>
        <Text
          style={[
            styles.buttonText,
            {
              paddingHorizontal: paddingHorizontal,
              fontSize: textSize,
              lineHeight: 2 * textSize,
              color: textColor,
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
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "HelveticaNeue-BoldItalic",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
