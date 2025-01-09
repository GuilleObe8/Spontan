import Colors from "@assets/Colors";
import AddButton from "@components/AddButton";
import Logo from "@components/Logo";
import TabBar from "@components/TabBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Activities from "@screens/Activities";
import Friends from "@screens/Friends";
import Main from "@screens/Main";
import { useRef, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SendActivity from "@screens/SendActivity";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  const scrollRef = useRef(null);

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
        <Pressable
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          onPress={() => {
            navigation.navigate("settings");
          }}
        >
          <Ionicons name="menu" size={24} color={Colors.secondaryLight} />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("main");
            scrollRef.current.scrollTo({
              y: 0,
              animated: true,
            });
          }}
        >
          <Logo marginTop={0} />
        </Pressable>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        />
      </View>
      <Tab.Navigator
        style={styles.navigatorContainer}
        sceneContainerStyle={styles.screenContainer}
        tabBar={(props) => <TabBar {...props} marginBottom={20} />}
        initialRouteName="main"
        backBehavior="initialRoute"
      >
        <Tab.Screen name="friends" component={Friends} />
        <Tab.Screen
          name="main"
          children={() => <Main scrollRef={scrollRef} />}
        />
        <Tab.Screen name="activities" component={Activities} />
      </Tab.Navigator>
      <AddButton
        style={{
          position: "absolute",
          // bottom: 8,
          bottom: Platform.OS === "ios" ? 28 : 16,
        }}
        onPress={() => {
          navigation.navigate("sendActivity");
        }}
      />
      {/* <View
          style={{
            backgroundColor: "transparent", // Colors.backgroundBlack,
            flexGrow: 1,
            alignItems: "center",

            borderWidth: 5,
            borderColor: "green",
          }}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,

              width: 300,
              height: 600,
              backgroundColor: "blue",
              borderWidth: 5,
              borderColor: "red",
            }}
          >
            <Text>MODAL</Text>
          </View>
        </View> */}
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
    marginTop: 24,
    width: "92%",
    maxWidth: 560,
  },
  screenContainer: {
    backgroundColor: Colors.backgroundBlack,
    // marginBottom: 44,
    marginBottom: Platform.OS === "ios" ? 22 : 44,
    paddingBottom: 4,
  },
});
