import { View, StyleSheet, Text } from "react-native";
import Picture from "./Picture";
import CloseButton from "./CloseButton";
import RoundedTextButton from "./RoundedTextButton";
import Colors from "@assets/Colors";
import { Fragment, useState } from "react";

export default function User({
  tag = "anna",
  firstName = "Anna",
  lastName = "Collin",
  email = "anna@collin.com",
  picture = "", // URL to database
  pendingAccept = "none", // none, received, sent
  friends = true,
  activityData = {
    numberOfInvites: 3,
    numberOfAccepted: 1,
    numberOfProposed: 0,
    favCategory: "🥊 Work out",
    totalResponseTime: 232, // seconds
  },
}) {
  const [friendsState, setFriendsState] = useState(friends);
  const [acceptState, setAcceptState] = useState(pendingAccept);

  return (
    <View
      style={[styles.horizontalContainer, { justifyContent: "space-between" }]}
    >
      <View style={[styles.horizontalContainer, { gap: 10 }]}>
        <Picture />
        <View style={{ gap: 4 }}>
          <Text
            style={[
              styles.text,
              {
                fontFamily: "HelveticaNeue-Medium",
                color: Colors.mainLight,
              },
            ]}
          >
            {tag}
          </Text>
          <Text style={styles.text}>
            {firstName} {lastName}
          </Text>
        </View>
      </View>
      {friendsState &&
        acceptState === "none" && ( // Current friend
          <CloseButton
            size={16}
            onPress={() => {
              setFriendsState(false);
              setAcceptState("none");
            }}
          />
        )}
      {!friendsState &&
        acceptState === "received" && ( // Received request
          <View style={[styles.horizontalContainer, { gap: 10 }]}>
            <RoundedTextButton
              text={"Accept"}
              textSize={12}
              paddingHorizontal={14}
              color={Colors.pastelPurple}
              onPress={() => {
                setFriendsState(true);
                setAcceptState("none");
              }}
            />
            <CloseButton
              size={16}
              onPress={() => {
                setAcceptState("none");
              }}
            />
          </View>
        )}
      {!friendsState &&
        acceptState === "sent" && ( // Sent request
          <RoundedTextButton
            textSize={12}
            paddingHorizontal={14}
            onPress={() => {
              setAcceptState("none");
            }}
            color={Colors.lightGrey}
            text={"Delete request"}
          />
        )}
      {!friendsState &&
        acceptState === "none" && ( // Searched user
          <RoundedTextButton
            textSize={12}
            paddingHorizontal={14}
            onPress={() => {
              setAcceptState("sent");
            }}
            color={Colors.pastelPurple}
            text={"Add"}
          />
        )}
      {friendsState &&
        acceptState !== "none" && ( // Error: a user can't be pending accept if already friends
          <Text
            style={[
              styles.text,
              { textAlign: "center", fontFamily: "HelveticaNeue-Bold" },
            ]}
          >
            Error!
          </Text>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: Colors.secondaryLight,
    fontFamily: "HelveticaNeue",
  },
});
