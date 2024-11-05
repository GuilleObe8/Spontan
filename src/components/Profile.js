import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Picture from "./Picture";

export default function Profile({
  type, // you, other
  tag = "tag",
  firstName = "Name",
  lastName = "Surname",
  email = "email@email.com",
  picture = "", // URL to database
  activityData = {
    numberOfInvites: 3,
    numberOfAccepted: 1,
    numberOfProposed: 0,
    favCategory: "Category",
    totalResponseTime: 232, // seconds
  },
}) {
  return (
    <View style={styles.container}>
      {type === "you" ? (
        <View>
          <Picture size={90} />
          <Pressable>
            <Ionicons
              style={{ position: "absolute", right: 0, bottom: 0 }}
              name="ellipse-sharp"
              size={24}
              color={Colors.backgroundGrey}
            />
            <Ionicons
              style={{ position: "absolute", right: 2, bottom: 2 }}
              name="add-circle-outline"
              size={20}
              color={Colors.mainLight}
            />
          </Pressable>
        </View>
      ) : (
        <Picture size={90} />
      )}
      <Text style={[styles.text, { marginTop: 6 }]}>
        {firstName} {lastName}
      </Text>
      <Text style={[styles.text, { fontSize: 14, marginTop: 4 }]}>@{tag}</Text>
      <Text style={[styles.text, { fontSize: 16, marginTop: 24 }]}>
        Average response time:
      </Text>
      <Text style={[styles.text, { color: Colors.pastelYellow, marginTop: 2 }]}>
        {formatTime(
          activityData.totalResponseTime,
          activityData.numberOfInvites
        )}
      </Text>
      <Text style={[styles.text, { fontSize: 16, marginTop: 16 }]}>
        Attended activities in the last 30 days:
      </Text>
      <Text style={[styles.text, { color: Colors.pastelGreen, marginTop: 2 }]}>
        {activityData.numberOfAccepted}/{activityData.numberOfInvites}
      </Text>
      <Text style={[styles.text, { fontSize: 16, marginTop: 16 }]}>
        Proposed activities in the last 30 days:
      </Text>
      <Text style={[styles.text, { color: Colors.pastelBlue, marginTop: 2 }]}>
        {activityData.numberOfProposed}
      </Text>
      <Text style={[styles.text, { fontSize: 16, marginTop: 16 }]}>
        Favorite category:
      </Text>
      <Text style={[styles.text, { color: Colors.pastelPink, marginTop: 2 }]}>
        {activityData.favCategory}
      </Text>
      {type === "other" ? (
        <View style={{ alignItems: "center", marginTop: 16, gap: 10 }}>
          <Text style={[styles.text, { fontSize: 16 }]}>
            Friends in common:
          </Text>
          <View style={[styles.horizontalContainer]}>
            <CommonFriend />
            <CommonFriend />
            <CommonFriend />
            <CommonFriend />
            <CommonFriend />
          </View>
          <Text
            style={[
              styles.text,
              { fontSize: 13, color: Colors.secondaryLight },
            ]}
          >
            and 3 others {/* and 3 more? */}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

function CommonFriend() {
  return (
    <View style={{ alignItems: "center", gap: 1 }}>
      <Picture size={42} />
      <Text style={[styles.text, { fontSize: 13 }]}>tag</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 18,
    fontFamily: "HelveticaNeue-MediumItalic",
    includeFontPadding: false,
    textAlignVertical: "center",
    color: Colors.mainLight,
  },
  horizontalContainer: {
    flexDirection: "row",
    gap: 5,
  },
});

function convertSeconds(seconds) {
  const hours = Math.floor(seconds / 3600); // 1 hour = 3600 seconds
  const minutes = Math.floor((seconds % 3600) / 60); // remaining minutes
  const remainingSeconds = seconds % 60; // remaining seconds

  return {
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds,
  };
}

function formatTime(totalResponseTime, numberOfInvites) {
  const time = convertSeconds(Math.round(totalResponseTime / numberOfInvites));

  const timeArray = [];

  // Check for non-zero units and add the corresponding text to timeArray array
  if (time.hours > 0) {
    timeArray.push(time.hours === 1 ? "1 hour" : `${time.hours} hours`);
  }
  if (time.minutes > 0) {
    timeArray.push(time.minutes === 1 ? "1 minute" : `${time.minutes} minutes`);
  }
  if (
    time.seconds > 0 ||
    (time.hours === 0 && time.minutes === 0 && time.seconds === 0) // Show seconds even if all are zero (like "0 seconds")
  ) {
    timeArray.push(time.seconds === 1 ? "1 second" : `${time.seconds} seconds`);
  }

  // Join the parts with commas and "and" for the last one
  if (timeArray.length === 0) {
    // In case no time units are present
    return "0 seconds";
  } else if (timeArray.length === 1) {
    // If there's only one unit (e.g., "1 hour")
    return timeArray[0];
  } else {
    return timeArray.slice(0, -1).join(", ") + " and " + timeArray.slice(-1);
  }
}
