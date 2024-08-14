import { StyleSheet, Text, View, LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Logo from "./src/components/Logo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// To prevent warnings from showing up
// LogBox.ignoreAllLogs(true);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    // prettier-ignore
    "HelveticaNeue": require("./assets/fonts/HelveticaNeue.otf"),
    "HelveticaNeue-Bold": require("./assets/fonts/HelveticaNeue-Bold.otf"),
    "HelveticaNeue-BoldItalic": require("./assets/fonts/HelveticaNeue-BoldItalic.otf"),
    "HelveticaNeue-Italic": require("./assets/fonts/HelveticaNeue-Italic.otf"),
    "HelveticaNeue-Light": require("./assets/fonts/HelveticaNeue-Light.otf"),
    "HelveticaNeue-LightItalic": require("./assets/fonts/HelveticaNeue-LightItalic.otf"),
    "HelveticaNeue-Medium": require("./assets/fonts/HelveticaNeue-Medium.otf"),
    "HelveticaNeue-MediumItalic": require("./assets/fonts/HelveticaNeue-MediumItalic.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2B2B2B" style="light" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Logo fontSize={20} />
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
