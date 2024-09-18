import Colors from "@assets/Colors";
import DashedLine from "@components/DashedLine";
import TextBox from "@components/TextBox";
import User from "@components/User";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// TODO: KeyboardAwareScrollView with the text input

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

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  useScrollToTop(topRef);
  useScrollToTop(bottomRef);

  return (
    <View
      style={{
        flexGrow: 1,
        flexShrink: 1,
      }}
    >
      <ScrollView
        style={styles.inputContainer}
        contentContainerStyle={{ padding: 20 }}
        ref={topRef}
      >
        <User pendingAccept={"none"} friends={false} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"none"} friends={true} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"received"} friends={false} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"received"} friends={false} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"sent"} friends={false} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"received"} friends={true} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"sent"} friends={true} />
      </ScrollView>
      <View style={{ marginVertical: 8 }} />
      <ScrollView
        style={styles.inputContainer}
        contentContainerStyle={{ padding: 20 }}
        ref={bottomRef}
      >
        <TextBox
          labelText={"Add new friends"}
          placeholder={"Search friends by name or tag"}
          leftIcon={
            <Ionicons
              name="search-outline"
              size={18}
              color={Colors.tertiaryLight}
            />
          }
        />
        <View style={styles.separator} />
        <User pendingAccept={"received"} friends={false} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"sent"} friends={false} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"received"} friends={true} />
        <DashedLine marginVertical={20} />
        <User pendingAccept={"sent"} friends={true} />
      </ScrollView>
      {/* <View style={{ marginVertical: 4 }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.backgroundGrey,
    overflow: "hidden",
  },
  separator: {
    marginVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondaryLightTransparent,
  },
});
