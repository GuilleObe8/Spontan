import { Text, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default function Logo({ fontSize = 36 }) {
  return <Text style={[styles.logo, { fontSize: fontSize }]}>Spontan</Text>;
}

const styles = StyleSheet.create({
  logo: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});
