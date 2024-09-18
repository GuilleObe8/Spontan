import Colors from "@assets/Colors";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "@routes/MainNavigator";
import ForgotPassword from "@screens/ForgotPassword";
import Login from "@screens/Login";
import Register from "@screens/Register";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { LogBox, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// To prevent warnings from showing up
// LogBox.ignoreAllLogs(true);

// LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

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
        <NavigationContainer>
          {/* <Login /> */}
          {/* <Register /> */}
          {/* <ForgotPassword /> */}
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}
