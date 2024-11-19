import "./gesture-handler";

import Colors from "@assets/Colors";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackNavigator from "@routes/StackNavigator";
import TopTabNavigator from "@routes/TopTabNavigator";
import ActivityDetail from "@screens/ActivityDetail";
import AddFriends from "@screens/AddFriends";
import ChangePassword from "@screens/ChangePassword";
import EditProfile from "@screens/EditProfile";
import ForgotPassword from "@screens/ForgotPassword";
import InviteFriends from "@screens/InviteFriends";
import Login from "@screens/Login";
import ProfileDetail from "@screens/ProfileDetail";
import Register from "@screens/Register";
import SendActivity from "@screens/SendActivity";
import Settings from "@screens/Settings";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { LogBox, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// TODO: - Configure status bar, splash screen and app icon: https://docs.expo.dev/tutorial/configuration/
//       - Manage differences between platforms: https://docs.expo.dev/tutorial/platform-differences/
//       - Fix web version: https://reactnavigation.org/docs/web-support/
//       - Fix cross-platform shadows: https://blog.logrocket.com/applying-box-shadows-in-react-native/

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
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: Colors.backgroundBlack,
            },
          }}
        >
          <StackNavigator />

          {/* <Login /> */}
          {/* <Register /> */}
          {/* <ForgotPassword /> */}
          {/* <ChangePassword /> */}
          {/* <TopTabNavigator /> */}
          {/* <AddFriends /> */}
          {/* <Settings /> */}
          {/* <EditProfile /> */}
          {/* <ActivityDetail type={"received"} /> */}
          {/* <ProfileDetail /> */}
          {/* <SendActivity /> */}
          {/* <InviteFriends /> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}
