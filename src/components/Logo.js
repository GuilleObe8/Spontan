import { Text, StyleSheet } from "react-native";
import Colors from "@assets/Colors";

export default function Logo({ fontSize = 36, marginTop = 24 }) {
  return (
    <Text
      style={[
        styles.logo,
        {
          marginTop: marginTop,
          fontSize: fontSize,
          includeFontPadding: false,
          textAlignVertical: "center",
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
  },
});
