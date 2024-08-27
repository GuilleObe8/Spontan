import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import TabBar from "@components/TabBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "@screens/Main";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function MainNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      sceneContainerStyle={{ backgroundColor: Colors.backgroundBlack }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="friends" children={() => <Logo fontSize={32} />} />
      <Tab.Screen name="main" component={Main} />
      <Tab.Screen name="activities" children={() => <Logo fontSize={22} />} />
    </Tab.Navigator>
  );
}
