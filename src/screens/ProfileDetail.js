import Colors from "@assets/Colors";
import Profile from "@components/Profile";
import Slider from "@components/Slider";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
      <View style={styles.inputContainer}>
        <Slider
          onPress={() => {
            navigation.goBack();
          }}
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
    backgroundColor: "transparent", // Colors.backgroundBlack,
    flexGrow: 1,
    alignItems: "center",
  },
  inputContainer: {
    // position: "absolute",
    // bottom: 0,
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 20,
    marginTop: Platform.OS === "web" ? 20 : 0,
  },
});
