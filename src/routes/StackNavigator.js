import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
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
import { useState } from "react";
import TopTabNavigator from "./TopTabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          flex: 1,
          backgroundColor: "transparent", //Colors.backgroundBlack
        },
        animationEnabled: true,
      }}
    >
      {isSignedIn ? (
        <>
          <Stack.Screen name="topTabNavigator" component={TopTabNavigator} />
          <Stack.Screen
            name="addFriends"
            component={AddFriends}
            options={slideFromRight}
          />
          <Stack.Screen
            name="settings"
            children={(props) => (
              <Settings {...props} setIsSignedIn={setIsSignedIn} />
            )}
            options={slideFromLeft}
          />
          <Stack.Screen
            name="editProfile"
            component={EditProfile}
            options={slideFromLeft}
          />
          <Stack.Screen
            name="profileDetail"
            component={ProfileDetail}
            options={slideFromBottom}
          />
          <Stack.Screen
            name="activityDetail"
            component={ActivityDetail}
            options={slideFromBottom}
          />
          <Stack.Screen
            name="sendActivity"
            component={SendActivity}
            options={slideFromBottom}
          />
          <Stack.Screen
            name="inviteFriends"
            component={InviteFriends}
            options={slideFromRight}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            children={(props) => (
              <Login {...props} setIsSignedIn={setIsSignedIn} />
            )}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={slideFromRight}
          />
          <Stack.Screen
            name="forgotPassword"
            component={ForgotPassword}
            options={slideFromRight}
          />
          <Stack.Screen
            name="changePassword"
            component={ChangePassword}
            options={slideFromRight}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

const transitionSpec = {
  open: {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
    // animation: "timing",
    // config: {
    //   duration: 300, // milliseconds
    //   easing: Easing.out(Easing.ease),
    // },
  },
  close: {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  },
};

const slideFromRight = {
  transitionSpec: transitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  // cardStyleInterpolator: ({ current }) => ({
  //   cardStyle: {
  //     transform: [
  //       {
  //         translateX: current.progress.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [Dimensions.get("window").width, 0],
  //         }),
  //       },
  //     ],
  //   },
  // }),
};

const slideFromLeft = {
  transitionSpec: transitionSpec,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureDirection: "horizontal-inverted",
  // cardStyleInterpolator: ({ current }) => ({
  //   cardStyle: {
  //     transform: [
  //       {
  //         translateX: current.progress.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [-Dimensions.get("window").width, 0],
  //         }),
  //       },
  //     ],
  //   },
  // }),
};

const slideFromBottom = {
  transitionSpec: transitionSpec,
  // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, // forHorizontalIOS, forVerticalIOS, forModalPresentationIOS, forFadeFromBottomAndroid, forRevealFromBottomAndroid
  cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
};
