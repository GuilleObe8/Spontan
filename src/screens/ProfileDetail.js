import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import Profile from "@components/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// TODO: - make slide up work and display on top of TopTabNavigatorgator

export default function ProfileDetail({ route, navigation }) {
  const insets = useSafeAreaInsets();

  const { tag, firstName, lastName, email, picture, activityData } =
    route.params;

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
      {/* Just for design stage */}
      <View style={styles.topContainer}>
        <Ionicons
          name="menu"
          size={24}
          color={Colors.secondaryLight}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <Logo marginTop={0} />
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        />
      </View>
      {/* ^ This code should be deleted in the final version */}

      <View style={styles.inputContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.slider}
        />
        <Profile
          type="other"
          tag={tag}
          firstName={firstName}
          lastName={lastName}
          email={email}
          picture={picture}
          activityData={activityData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlack,
    flexGrow: 1,
    alignItems: "center",
  },
  topContainer: {
    opacity: 0.2,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    maxWidth: 560,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 20,
    marginTop: 20,
  },
  slider: {
    backgroundColor: Colors.secondaryLight,
    width: "20%",
    height: "0.7%",
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
});
