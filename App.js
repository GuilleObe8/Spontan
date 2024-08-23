import Colors from "@assets/Colors";
import Icon from "@assets/Icon";
import Activity_test from "@components/Activity_test";
import ForgotPassword from "@screens/ForgotPassword";
import Login from "@screens/Login";
import Register from "@screens/Register";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// To prevent warnings from showing up
// LogBox.ignoreAllLogs(true);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    // prettier-ignore
    "HelveticaNeue": require("@fonts/HelveticaNeue.otf"),
    "HelveticaNeue-Bold": require("@fonts/HelveticaNeue-Bold.otf"),
    "HelveticaNeue-BoldItalic": require("@fonts/HelveticaNeue-BoldItalic.otf"),
    "HelveticaNeue-Italic": require("@fonts/HelveticaNeue-Italic.otf"),
    "HelveticaNeue-Light": require("@fonts/HelveticaNeue-Light.otf"),
    "HelveticaNeue-LightItalic": require("@fonts/HelveticaNeue-LightItalic.otf"),
    "HelveticaNeue-Medium": require("@fonts/HelveticaNeue-Medium.otf"),
    "HelveticaNeue-MediumItalic": require("@fonts/HelveticaNeue-MediumItalic.otf"),
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
    <View style={{ flex: 1, backgroundColor: Colors.backgroundBlack }}>
      <StatusBar backgroundColor={Colors.backgroundBlack} style="light" />
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Login /> */}
          {/* <Register /> */}
          {/* <ForgotPassword /> */}
          <Activity_test />
          {/* <Icon /> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
