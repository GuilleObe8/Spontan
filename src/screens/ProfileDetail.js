import Colors from "@assets/Colors";
import Profile from "@components/Profile";
import Slider from "@components/Slider";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileDetail({
  tag,
  firstName,
  lastName,
  email,
  picture,
  activityData,
  onPressSlider,
}) {
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
      <View style={styles.inputContainer}>
        <Slider onPress={onPressSlider} />
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
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 20,
    marginTop: 20,
  },
});
