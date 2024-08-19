import { Text, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default function Slogan({ fontSize = 26, marginTop = 30 }) {
  return (
    <Text
      style={[
        styles.slogan,
        { fontSize: fontSize, lineHeight: fontSize, marginTop: marginTop },
      ]}
    >
      Embrace the{"\n"}spark of Spontaneity!
    </Text>
  );
}

const styles = StyleSheet.create({
  slogan: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-MediumItalic",
    textAlign: "center",
  },
});
