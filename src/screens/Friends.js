import Colors from "@assets/Colors";
import TextBox from "@components/TextBox";
import User from "@components/User";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

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
      numberOfProposed: 0,
      favCategory: "Sport",
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
      numberOfProposed: 1,
      favCategory: "Nature",
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
      numberOfProposed: 3,
      favCategory: "Food",
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
      numberOfProposed: 0,
      favCategory: "Drinks",
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
      numberOfProposed: 3,
      favCategory: "Cinema",
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
      numberOfProposed: 1,
      favCategory: "Sport",
      totalResponseTime: 65, // seconds
    },
  },
];

export default function Friends({ navigation }) {
  const [usersArray, setUsersArray] = useState(usersData);
  const updateUserState = ({ tag, prop, value }) => {
    setUsersArray(
      usersArray.map((user) =>
        user.tag === tag ? { ...user, [prop]: value } : user
      )
    );
  };

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Text style={styles.mainText}>Current friends</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("addFriends");
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.secondaryText}>Add new friends</Text>
            <Ionicons // only display if friends request
              name="ellipse"
              size={6}
              color={Colors.pastelRed}
            />
          </View>
        </Pressable>
      </View>
      <TextBox
        placeholder={"Search users by name or tag"}
        leftIcon={
          <Ionicons
            name="search-outline"
            size={15}
            color={Colors.tertiaryLight}
          />
        }
      />
      <View
        style={[styles.separator, { marginVertical: 14, borderStyle: "solid" }]}
      />
      <FlatList
        data={usersArray.filter((user) => user.friends === true)}
        // data={usersArray}
        renderItem={({ item }) => {
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
        ref={ref}
      />
    </View>
    // <View style={{ marginVertical: 4 }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.backgroundGrey,
    overflow: "hidden",
    padding: 20,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondaryLightTransparent,
    borderStyle: "dashed",
  },
  mainText: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-BoldItalic",
    fontSize: 24,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  secondaryText: {
    color: Colors.secondaryLight,
    fontFamily: "HelveticaNeue-Italic",
    fontSize: 12,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
