import Colors from "@assets/Colors";
import User from "@components/User";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

usersArray = [
  {
    tag: "anna",
    firstName: "Anna",
    lastName: "Collin",
    email: "anna@collin.com",
    picture: "", // URL to database
    pendingAccept: "none",
    friends: true,
    activityData: {
      numberOfInvites: 3,
      numberOfAccepted: 1,
      totalResponseTime: 232, // seconds
    },
  },
  {
    tag: "tony21",
    firstName: "Tony",
    lastName: "Peñas",
    email: "tony21@mail.es",
    picture: "", // URL to database
    pendingAccept: "received",
    friends: false,
    activityData: {
      numberOfInvites: 1,
      numberOfAccepted: 0,
      totalResponseTime: 14, // seconds
    },
  },
  {
    tag: "daniel_g",
    firstName: "Daniel",
    lastName: "Grasso",
    email: "daniel_g@address.it",
    picture: "", // URL to database
    pendingAccept: "received",
    friends: false,
    activityData: {
      numberOfInvites: 7,
      numberOfAccepted: 4,
      totalResponseTime: 183, // seconds
    },
  },
  {
    tag: "msun",
    firstName: "Mariana",
    lastName: "Sun",
    email: "mariana.sun@mail.com",
    picture: "", // URL to database
    pendingAccept: "none",
    friends: false,
    activityData: {
      numberOfInvites: 2,
      numberOfAccepted: 2,
      totalResponseTime: 37, // seconds
    },
  },
  {
    tag: "emmabello",
    firstName: "Emma",
    lastName: "Bello",
    email: "emmabello@member.com",
    picture: "", // URL to database
    pendingAccept: "none",
    friends: true,
    activityData: {
      numberOfInvites: 6,
      numberOfAccepted: 2,
      totalResponseTime: 476, // seconds
    },
  },
  {
    tag: "a_salam",
    firstName: "Anton",
    lastName: "Salampasi",
    email: "asalampasi@address.se",
    picture: "", // URL to database
    pendingAccept: "sent",
    friends: false,
    activityData: {
      numberOfInvites: 3,
      numberOfAccepted: 2,
      totalResponseTime: 65, // seconds
    },
  },
];

export default function Friends() {
  const [email, setEmail] = useState("");

  return (
    <KeyboardAwareScrollView
      bounces={false} // for iOS
      contentContainerStyle={styles.container}
    >
      <View style={styles.inputContainer}>
        <User pendingAccept={"none"} friends={false} />
        <View style={styles.separator} />
        <User pendingAccept={"none"} friends={true} />
        <View style={styles.separator} />
        <User pendingAccept={"received"} friends={false} />
        <View style={styles.separator} />
        <User pendingAccept={"received"} friends={false} />
        <View style={styles.separator} />
        <User pendingAccept={"sent"} friends={false} />
        <View style={styles.separator} />
        <User pendingAccept={"received"} friends={true} />
        <View style={styles.separator} />
        <User pendingAccept={"sent"} friends={true} />
        <View style={styles.separator} />
      </View>
      {/* <View style={{ marginVertical: 8 }} />
      <View style={styles.inputContainer}></View> */}
      <View style={{ marginVertical: 4 }} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlack,
    flexGrow: 1,
    alignItems: "center",
  },
  inputContainer: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 8,
    padding: 20,
    elevation: 4,
  },
  separator: {
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
    borderBottomColor: Colors.secondaryLightTransparent,
  },
});
