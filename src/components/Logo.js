import Colors from "@assets/Colors";
import { StyleSheet, Text } from "react-native";

export default function Logo({
  fontSize = 36,
  marginTop = 24,
  color = Colors.mainLight,
}) {
  return (
    <Text
      style={[
        styles.logo,
        {
          color: color,
          marginTop: marginTop,
          fontSize: fontSize,
        },
      ]}
    >
      Spontan
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontFamily: "HelveticaNeue-BoldItalic",
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
