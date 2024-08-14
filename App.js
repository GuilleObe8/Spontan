import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ForgotPass from "./src/screens/ForgotPass";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2B2B2B" style="light" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ForgotPass />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
});
