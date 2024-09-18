import Colors from "@assets/Colors";
import TextBox from "@components/TextBox";
import User from "@components/User";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

const usersData = [
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
  const [usersArray, setUsersArray] = useState(usersData);
  const updateUserState = ({ tag, prop, value }) => {
    setUsersArray(
      usersArray.map((user) =>
        user.tag === tag ? { ...user, [prop]: value } : user
      )
    );
  };

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
      <View style={styles.inputContainer}>
        <FlatList
          data={usersArray.filter(
            (user) => user.friends === true || user.pendingAccept === "received"
          )}
          renderItem={({ item }) => {
            console.log("Rendered user:", item.tag);
            return (
              <User
                tag={item.tag}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                picture={item.picture}
                pendingAccept={item.pendingAccept}
                friends={item.friends}
                activityData={item.activityData}
              />
            );
          }}
          ItemSeparatorComponent={<View style={styles.separator} />}
          ref={topRef}
        />
      </View>
      <View style={{ marginVertical: 8 }} />
      <View style={styles.inputContainer}>
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
        <View
          style={[
            styles.separator,
            { marginVertical: 14, borderStyle: "solid" },
          ]}
        />
        <FlatList
          data={usersArray.filter((user) => user.friends === false)}
          renderItem={({ item }) => {
            console.log("Rendered user:", item.tag);
            return (
              <User
                tag={item.tag}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                picture={item.picture}
                pendingAccept={item.pendingAccept}
                friends={item.friends}
                activityData={item.activityData}
              />
            );
          }}
          ItemSeparatorComponent={<View style={styles.separator} />}
          ref={bottomRef}
        />
      </View>
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
    padding: 20,
  },
  separator: {
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondaryLightTransparent,
    borderStyle: "dashed",
  },
});
