import Colors from "@assets/Colors";
import CheckBox from "@components/CheckBox";
import Profile from "@components/Profile";
import RoundedTextButton from "@components/RoundedTextButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Settings({ navigation, setIsSignedIn }) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      bounces={false} // for iOS
      contentContainerStyle={[
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
        {/* <Pressable
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          onPress={() => {
            navigation.navigate("topTabNavigator");
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={Colors.secondaryLight}
          />
        </Pressable> */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <Text style={styles.text}>Profile</Text>
        {/* <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        /> */}
        <Pressable
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          onPress={() => {
            navigation.navigate("topTabNavigator");
          }}
        >
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={Colors.secondaryLight}
          />
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <Profile type="you" />
        <Pressable
          onPress={() => {
            navigation.navigate("editProfile");
          }}
        >
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                fontFamily: "HelveticaNeue-BoldItalic",
                color: Colors.pastelPurple,
                marginTop: 24,
              },
            ]}
          >
            Edit profile
          </Text>
        </Pressable>
        {/* <Pressable>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                fontFamily: "HelveticaNeue-BoldItalic",
                color: Colors.pastelPinkTransparent,
                marginTop: 4,
              },
            ]}
          >
            Log out
          </Text>
        </Pressable> */}
      </View>
      <Text style={styles.text}>Settings</Text>
      <View
        style={[styles.inputContainer, { alignItems: "flex-start", gap: 14 }]}
      >
        <CheckBox
          text={"Invites from anybody"}
          textSize={16}
          textColor={Colors.mainLight}
          textFont={"HelveticaNeue-MediumItalic"}
          description={
            "by disabling this option you will only receive new activities proposed by your friends"
          }
          descriptionSize={12}
          descriptionColor={Colors.secondaryLight}
          descriptionFont={"HelveticaNeue-MediumItalic"}
          value={true}
          onValueChange={() => {}}
        />
        <CheckBox
          text={"New activities"}
          textSize={16}
          textColor={Colors.mainLight}
          textFont={"HelveticaNeue-MediumItalic"}
          description={"@tag wants you to join “Going to the Gym” at 17:00"}
          descriptionSize={12}
          descriptionColor={Colors.secondaryLight}
          descriptionFont={"HelveticaNeue-MediumItalic"}
          value={true}
          onValueChange={() => {}}
        />
        <CheckBox
          text={"Deleted activities"}
          textSize={16}
          textColor={Colors.mainLight}
          textFont={"HelveticaNeue-MediumItalic"}
          description={"@tag deleted the activity “Cinema!” at 21:00"}
          descriptionSize={12}
          descriptionColor={Colors.secondaryLight}
          descriptionFont={"HelveticaNeue-MediumItalic"}
          value={true}
          onValueChange={() => {}}
        />
        <CheckBox
          text={"Received answers"}
          textSize={16}
          textColor={Colors.mainLight}
          textFont={"HelveticaNeue-MediumItalic"}
          description={"@tag has answered Yes! to your activity"}
          descriptionSize={12}
          descriptionColor={Colors.secondaryLight}
          descriptionFont={"HelveticaNeue-MediumItalic"}
          value={true}
          onValueChange={() => {}}
        />
        <CheckBox
          text={"Friends requests"}
          textSize={16}
          textColor={Colors.mainLight}
          textFont={"HelveticaNeue-MediumItalic"}
          description={"@tag has sent you a friend request"}
          descriptionSize={12}
          descriptionColor={Colors.secondaryLight}
          descriptionFont={"HelveticaNeue-MediumItalic"}
          value={true}
          onValueChange={() => {}}
        />
      </View>
      <View>
        <RoundedTextButton
          text={"Log Out"}
          color={Colors.backgroundGrey}
          textColor={Colors.pastelPink}
          textSize={16}
          paddingHorizontal={20}
          elevation={4}
          onPress={() => {
            setIsSignedIn(false); // CHANGE FOR DESIRED ACTION
          }}
        />
      </View>
      <View
        style={{
          marginVertical: 16, // 4%
        }}
      >
        <RoundedTextButton
          text={"Delete account"}
          color={Colors.pastelPink}
          textSize={16}
          paddingHorizontal={20}
          elevation={4}
          onPress={() => {
            setIsSignedIn(false); // CHANGE FOR DESIRED ACTION
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.backgroundBlack,
    alignItems: "center",
  },
  topContainer: {
    marginTop: 21, // Adjust depending on Logo size on TopTabNavigatorgator
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    maxWidth: 560,
  },
  text: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 18,
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderRadius: 8,
    padding: 30,
    marginVertical: 24,
    elevation: 4,
  },
});
