import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import TextBox from "@components/TextBox";
import { InviteUser } from "@components/User";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// TODO: - make slide up work and display on top of MainNavigator
//       - check exports in User.js

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
      favCategory: "🥊 Work out",
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
      totalResponseTime: 65, // seconds
    },
  },
];

export default function InviteFriends() {
  const insets = useSafeAreaInsets();

  const [usersArray, setUsersArray] = useState(usersData);
  const updateUserState = ({ tag, prop, value }) => {
    setUsersArray(
      usersArray.map((user) =>
        user.tag === tag ? { ...user, [prop]: value } : user
      )
    );
  };

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
        <View style={[styles.horizontalContainer, { marginBottom: 10 }]}>
          <Text style={styles.mainText}>Invite friends</Text>
          <Pressable onPress={() => {}}>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color={Colors.secondaryLight}
            />
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
          style={[
            styles.separator,
            { marginVertical: 14, borderStyle: "solid" },
          ]}
        />
        <FlatList
          data={usersArray.filter((user) => user.friends === true)}
          renderItem={({ item }) => {
            return (
              <InviteUser
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
        />
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
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondaryLightTransparent,
    borderStyle: "dashed",
  },
});
