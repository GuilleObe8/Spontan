import Colors from "@assets/Colors";
import { StyleSheet, Text } from "react-native";

export default function Logo({ fontSize = 36, marginTop = 24 }) {
  return (
    <Text
      style={[
        styles.logo,
        {
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
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-BoldItalic",
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
