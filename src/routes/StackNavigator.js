import Colors from "@assets/Colors";
import { createStackNavigator } from "@react-navigation/stack";
import ActivityDetail from "@screens/ActivityDetail";
import AddFriends from "@screens/AddFriends";
import EditProfile from "@screens/EditProfile";
import ForgotPassword from "@screens/ForgotPassword";
import InviteFriends from "@screens/InviteFriends";
import Login from "@screens/Login";
import ProfileDetail from "@screens/ProfileDetail";
import Register from "@screens/Register";
import SendActivity from "@screens/SendActivity";
import Settings from "@screens/Settings";
import { useState } from "react";
import SlideFromRight from "@config/Transitions";
import TopTabNavigator from "./TopTabNavigator";

// TODO: - Check user token
//       - Change background color during transition

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { flex: 1, backgroundColor: Colors.backgroundBlack },
        animationEnabled: true,
      }}
    >
      {isSignedIn ? (
        <>
          <Stack.Screen name="topTabNavigator" component={TopTabNavigator} />
          <Stack.Screen
            name="addFriends"
            component={AddFriends}
            options={SlideFromRight}
          />
          <Stack.Screen
            name="settings"
            children={(props) => (
              <Settings {...props} setIsSignedIn={setIsSignedIn} />
            )}
          />
          <Stack.Screen name="editProfile" component={EditProfile} />
          <Stack.Screen name="profileDetail" component={ProfileDetail} />
          <Stack.Screen name="activityDetail" component={ActivityDetail} />
          <Stack.Screen name="sendActivity" component={SendActivity} />
          <Stack.Screen name="inviteFriends" component={InviteFriends} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            children={(props) => (
              <Login {...props} setIsSignedIn={setIsSignedIn} />
            )}
          />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        </>
      )}
    </Stack.Navigator>
  );
}
