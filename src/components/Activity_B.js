import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ProgressIndicator from "./ProgressIndicator";
import RoundedTextButton from "./RoundedTextButton";

export default function Activity_B({
  width = "100%",
  type, // "received", "sent"
  tag = "tag",
  firstName = "Name",
  lastName = "Surname",
  category = "category",
  remainingTime = "00:00",
  title = "Title",
  description = "Description text",
  date = "Date",
  activityTime = "xx:xx - yy:yy",
  place = "Place",
  answeredPeople = 3,
  numPeople = 7,
}) {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [chat, setChat] = useState(false);

  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          borderColor: yes
            ? Colors.pastelGreen
            : no
            ? Colors.pastelPink
            : chat
            ? Colors.pastelBlue
            : Colors.backgroundGrey,
          borderWidth: yes || no || chat ? 2 : 0,
          padding: yes || no || chat ? 18 : 20,
        },
      ]}
    >
      <Pressable
        onPress={() =>
          navigation.navigate("activityDetail", {
            type,
            tag,
            firstName,
            lastName,
            category,
            remainingTime,
            title,
            description,
            date,
            activityTime,
            place,
            answeredPeople,
            numPeople,
          })
        }
      >
        <View style={styles.topInfoView}>
          {type === "received" ? (
            <Text style={styles.topText}>@{tag}</Text>
          ) : type === "sent" ? (
            <Text style={styles.topText}>you</Text>
          ) : (
            <Text>Add type!</Text>
          )}
          <Text style={styles.topText}>{category}</Text>
          <Text style={styles.topText}>{remainingTime}</Text>
        </View>
        <View>
          <Text style={styles.titleText}>{title}</Text>
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
            <Ionicons name="location" size={16} color={Colors.secondaryLight} />
            <Text style={[styles.descriptionText, { marginTop: 1 }]}>
              {place}
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              borderBottomWidth: StyleSheet.hairlineWidth,
              width: "100%",
              borderBottomColor: Colors.secondaryLightTransparent,
            }}
          />
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
                text={"Delete"}
                color={Colors.pastelPink}
                textSize={12}
                paddingHorizontal={16}
              />
            </View>
          </View>
        ) : (
          <Text>Add type!</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.backgroundGrey,
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
  titleText: {
    fontSize: 24,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-BoldItalic",
    marginBottom: 10,
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
});
