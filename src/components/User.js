import Colors from "@assets/Colors";
import { useNavigation } from "@react-navigation/native";
import ProfileDetail from "@screens/ProfileDetail";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import CloseButton from "./CloseButton";
import Picture from "./Picture";
import RoundedTextButton from "./RoundedTextButton";

export default function User({
  tag = "tag",
  firstName = "Name",
  lastName = "Surname",
  email = "email@email.com",
  picture = "", // URL to database
  pendingAccept = "none", // none, received, sent
  friends = true,
  activityData = {
    numberOfInvites: 3,
    numberOfAccepted: 1,
    numberOfProposed: 0,
    favCategory: "Category",
    totalResponseTime: 232, // seconds
  },
}) {
  const navigation = useNavigation();

  const [friendsState, setFriendsState] = useState(friends);
  const [acceptState, setAcceptState] = useState(pendingAccept);

  const [showProfileDetail, setShowProfileDetail] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setShowProfileDetail(true);
      }}
      // onPress={() => {
      //   console.log(`user "${tag}" clicked`);
      // }}
    >
      <View
        style={[
          styles.horizontalContainer,
          { justifyContent: "space-between" },
        ]}
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
      <Modal
        isVisible={showProfileDetail}
        onBackButtonPress={() => {
          setShowProfileDetail(false);
        }}
        onBackdropPress={() => {
          setShowProfileDetail(false);
        }}
        onModalWillHide={() => {
          setShowProfileDetail(false);
        }}
        hideModalContentWhileAnimating={true}
        backdropOpacity={0.5}
        useNativeDriverForBackdrop
        backdropTransitionOutTiming={0}
        swipeDirection={Platform.OS !== "web" ? "down" : null}
        style={{ flex: 1, margin: 0 }}
      >
        <ProfileDetail
          tag={tag}
          firstName={firstName}
          lastName={lastName}
          email={email}
          picture={picture}
          activityData={activityData}
          onPressSlider={() => {
            setShowProfileDetail(false);
          }}
        />
      </Modal>
    </Pressable>
  );
}

export function InviteUser({
  tag = "anna",
  firstName = "Anna",
  lastName = "Collin",
  email = "anna@collin.com",
  picture = "", // URL to database
  invited = false,
  activityData = {
    numberOfInvites: 3,
    numberOfAccepted: 1,
    numberOfProposed: 0,
    favCategory: "🥊 Work out",
    totalResponseTime: 232, // seconds
  },
}) {
  const navigation = useNavigation();

  const [invitedState, setInvitedState] = useState(invited);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("profileDetail", {
          tag,
          firstName,
          lastName,
          email,
          picture,
          activityData,
        });
      }}
      // onPress={() => {
      //   console.log(`user "${tag}" clicked`);
      // }}
    >
      <View
        style={[
          styles.horizontalContainer,
          { justifyContent: "space-between" },
        ]}
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
        {!invitedState && ( // Not invited friend
          <RoundedTextButton
            textSize={12}
            paddingHorizontal={16}
            onPress={() => {
              setInvitedState(!invitedState);
            }}
            color={Colors.pastelPurple}
            text={"Invite"}
          />
        )}
        {invitedState && ( // Invited friend
          <RoundedTextButton
            textSize={12}
            paddingHorizontal={16}
            onPress={() => {
              setInvitedState(!invitedState);
            }}
            color={Colors.lightGrey}
            text={"Delete"}
          />
        )}
      </View>
    </Pressable>
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
