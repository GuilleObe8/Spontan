import { View, StyleSheet, Text } from "react-native";
import Picture from "./Picture";

export default function User({
  tag = "anna",
  firstName = "Anna",
  lastName = "Collin",
  email = "anna@collin.com",
  picture = "", // URL to database
  pendingRequest = false,
  friends = true,
  activityData = {
    numberOfInvites: 3,
    numberOfAccepted: 1,
    totalResponseTime: 232, // seconds
  },
}) {
  return (
    <View style={styles.container}>
      <Picture />
      <Text>Friend</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
