import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "@screens/ForgotPassword";
import Login from "@screens/Login";
import Register from "@screens/Register";
import MainNavigator from "./MainNavigator";
import Colors from "@assets/Colors";

// TODO: - Check user token
//       - Change background color during transition

const Stack = createStackNavigator();

export default function LoginNavigator() {
  const isSignedIn = true;

  return (
    <Stack.Navigator
      //   initialRouteName="mainNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      {isSignedIn ? (
        <>
          <Stack.Screen name="mainNavigator" component={MainNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        </>
      )}
    </Stack.Navigator>
  );
}
