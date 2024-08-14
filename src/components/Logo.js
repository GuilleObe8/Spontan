import { Text, StyleSheet } from "react-native";

export default function Logo({ fontSize }) {
  const size = fontSize || 36; // If fontSize is not specified, size is 36

  return <Text style={[styles.logo, { fontSize: size }]}>Spontan</Text>;
}

const styles = StyleSheet.create({
  logo: {
    color: "#F8F8F8",
    textAlign: "center",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});
