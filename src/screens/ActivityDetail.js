import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import Picture from "@components/Picture";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ProgressIndicator from "@components/ProgressIndicator";
import RoundedTextButton from "@components/RoundedTextButton";

// TODO: - make slide up work and display on top of MainNavigator

export default function ActivityDetail({
  type, // "received", "sent"
  tag = "@tag",
  firstName = "Anna",
  lastName = "Collin",
  category = "category",
  remainingTime = "00:00",
  title = "Gym",
  description = "Join me at the gym tomorrow at 15:00!",
  date = "Tomorrow",
  activityTime = "15:00 - 16:00",
  place = "SATS Solna",
  timetable,
  answeredPeople = 3,
  numPeople = 7,
}) {
  const insets = useSafeAreaInsets();

  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [chat, setChat] = useState(false);

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
          size={26}
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
        <View style={styles.slider} />
        <View style={[styles.horizontalView, { gap: 20 }]}>
          <Picture size={60} />
          <Text
            style={[
              styles.mainText,
              { fontFamily: "HelveticaNeue-MediumItalic", fontSize: 20 },
            ]}
          >
            {firstName} {lastName}
            {"\n"}proposed an activity!
          </Text>
        </View>
        <View style={[styles.separator, { borderStyle: "dashed" }]} />

        <View>
          <View style={styles.topInfoView}>
            {type === "received" ? (
              <Text style={styles.topText}>{tag}</Text>
            ) : type === "sent" ? (
              <Text style={styles.topText}>you</Text>
            ) : (
              <Text>Add type!</Text>
            )}
            <Text style={styles.topText}>{category}</Text>
            <Text style={styles.topText}>{remainingTime}</Text>
          </View>
          <View>
            <Text style={[styles.mainText, { marginBottom: 10 }]}>{title}</Text>
            <Text style={styles.descriptionText}>{description}</Text>
            <View style={{ marginVertical: 9 }} />
            <View style={styles.horizontalView}>
              {/* <Ionicons name="time" size={17} color={Colors.secondaryLight} /> */}
              <Ionicons
                name="calendar-clear"
                size={16}
                color={Colors.secondaryLight}
              />
              <Text style={[styles.descriptionText, { marginTop: 1 }]}>
                {date} {activityTime}
              </Text>
            </View>
            <View style={{ marginVertical: 3.5 }} />
            <View style={styles.horizontalView}>
              <Ionicons
                name="location"
                size={16}
                color={Colors.secondaryLight}
              />
              <Text style={[styles.descriptionText, { marginTop: 1 }]}>
                {place}
              </Text>
            </View>
            <View style={styles.map} />
            <View
              style={[
                styles.horizontalView,
                {
                  gap: 100,
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text style={styles.descriptionText}>Address:</Text>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={styles.descriptionText}>Solnavägen 12</Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { marginTop: 4, marginBottom: 8 },
                  ]}
                >
                  160 50, Solna
                </Text>
                <RoundedTextButton
                  text={"Get directions"}
                  color={Colors.pastelPurple}
                  textSize={12}
                  paddingHorizontal={16}
                />
              </View>
            </View>
            <View
              style={[
                styles.horizontalView,
                {
                  marginTop: 16,
                  gap: 65,
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text style={styles.descriptionText}>Opening hours:</Text>
              <View>
                <Text style={styles.descriptionText}>
                  Mon - Fri:{"   "}08:00 - 22:00
                </Text>
                <View
                  style={[
                    styles.horizontalView,
                    { justifyContent: "space-between", marginTop: 4 },
                  ]}
                >
                  <Text style={styles.descriptionText}>Sat:</Text>
                  <Text style={styles.descriptionText}>09:00 - 22:00</Text>
                </View>
                <View
                  style={[
                    styles.horizontalView,
                    { justifyContent: "space-between", marginTop: 4 },
                  ]}
                >
                  <Text style={styles.descriptionText}>Sun:</Text>
                  <Text style={styles.descriptionText}>09:00 - 19:00</Text>
                </View>
                {/* <Text style={styles.descriptionText}>{timetable}</Text> */}
              </View>
            </View>
            <View style={styles.separator} />
          </View>
          {type === "received" ? (
            <View style={styles.bottomView}>
              <View style={[styles.horizontalView, { gap: 8 }]}>
                <ProgressIndicator
                  answeredPeople={answeredPeople}
                  numPeople={numPeople}
                />
                <Text style={styles.descriptionText}>
                  {answeredPeople}/{numPeople}
                </Text>
              </View>
              <View style={styles.horizontalView}>
                <RoundedTextButton
                  onPress={() => {
                    setYes(!yes);
                    setNo(false);
                    setChat(false);
                  }}
                  text={"Yes!"}
                  color={no || chat ? Colors.lightGrey : Colors.pastelGreen}
                  textSize={12}
                  paddingHorizontal={16}
                />
                <RoundedTextButton
                  onPress={() => {
                    setYes(false);
                    setNo(!no);
                    setChat(false);
                  }}
                  text={"No"}
                  color={yes || chat ? Colors.lightGrey : Colors.pastelPink}
                  textSize={12}
                  paddingHorizontal={16}
                />
                <RoundedTextButton
                  onPress={() => {
                    setYes(false);
                    setNo(false);
                    setChat(!chat);
                  }}
                  text={" "}
                  textSize={12}
                  icon={
                    <Ionicons
                      name="chatbox-ellipses-outline"
                      size={16}
                      color={Colors.backgroundBlack}
                      style={{ position: "absolute" }}
                    />
                  }
                  color={yes || no ? Colors.lightGrey : Colors.pastelBlue}
                  paddingHorizontal={24}
                />
              </View>
            </View>
          ) : type === "sent" ? (
            <View style={styles.bottomView}>
              <View style={[styles.horizontalView, { gap: 8 }]}>
                <ProgressIndicator
                  answeredPeople={answeredPeople}
                  numPeople={numPeople}
                />
                <Text style={styles.descriptionText}>
                  {answeredPeople}/{numPeople}
                </Text>
              </View>
              <View style={styles.horizontalView}>
                <RoundedTextButton
                  text={"Delete event"}
                  color={Colors.pastelPink}
                  textSize={12}
                  paddingHorizontal={16}
                />
              </View>
            </View>
          ) : (
            <Text>Add type!</Text>
          )}
        </View>
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
  mainText: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-BoldItalic",
    fontSize: 24,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondaryLightTransparent,
    marginVertical: 20,
    borderStyle: "solid",
  },
  topInfoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  topText: {
    fontSize: 12,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: Colors.secondaryLightTransparent,
    fontFamily: "HelveticaNeue-LightItalic",
  },
  descriptionText: {
    fontSize: 13,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: Colors.secondaryLight,
    fontFamily: "HelveticaNeue",
  },
  horizontalView: { flexDirection: "row", alignItems: "center", gap: 5 },
  bottomView: { flexDirection: "row", justifyContent: "space-between" },
  map: {
    borderRadius: 8,
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: Colors.lightGrey,
    marginVertical: 18,
  },
});
