import Colors from "@assets/Colors";
import Icon from "@assets/Icon";
import Logo from "@components/Logo";
import TabBar from "@components/TabBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Main from "@screens/Main";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function MainNavigator() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.topContainer}>
        <Pressable style={{ flex: 1 }}>
          <Ionicons name="menu" size={24} color={Colors.secondaryLight} />
        </Pressable>
        <Pressable
          style={{ position: "center" }}
          onPress={() => navigation.navigate("main")}
        >
          <Logo fontSize={32} marginTop={0} />
        </Pressable>
        <View style={{ flex: 1 }} />
      </View>
      <Tab.Navigator
        style={styles.navigatorContainer}
        sceneContainerStyle={styles.screenContainer}
        tabBar={(props) => <TabBar {...props} marginBottom={12} />}
        initialRouteName="main"
        backBehavior="initialRoute"
      >
        <Tab.Screen name="friends" component={Icon} />
        <Tab.Screen name="main" component={Main} />
        <Tab.Screen name="activities" component={Icon} />
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBlack,
    alignItems: "center",
  },
  topContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    maxWidth: 560,
  },
  navigatorContainer: {
    backgroundColor: Colors.backgroundBlack,
    marginTop: 20,
    width: "92%",
    maxWidth: 560,
  },
  screenContainer: {
    backgroundColor: Colors.backgroundBlack,
    borderRadius: 8,
    marginBottom: 16, //4%
  },
});
