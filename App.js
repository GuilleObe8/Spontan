import { StyleSheet, Text, View, LogBox, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "./assets/Colors";
import Logo from "./src/components/Logo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import CloseButton from "./src/components/CloseButton";
import RoundedTextButton from "./src/components/RoundedTextButton";
import Slogan from "./src/components/Slogan";
import TextBox from "./src/components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckBox from "./src/components/CheckBox";

// maxWidth: 480 is a good value

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
      <StatusBar backgroundColor={Colors.backgroundBlack} style="light" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}></SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBlack,
    alignItems: "center",
    justifyContent: "center",
  },
});
