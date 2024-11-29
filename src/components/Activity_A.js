import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import ProgressIndicator from "./ProgressIndicator";
import RoundedTextButton from "./RoundedTextButton";

// Test with very long title and description
// TODO: - Share state with activityDetail

export default function Activity_A({
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
  pressable = true,
}) {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [chat, setChat] = useState(false);

  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [onModalHideDelete, setOnModalHideDelete] = useState(false);

  return (
    <View style={[styles.container, { width: width }]}>
      {pressable && (
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
              <Ionicons
                name="location"
                size={16}
                color={Colors.secondaryLight}
              />
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
                  onPress={() => {
                    // ADD DESIRED ACTION
                    setIsModalVisible(true);
                  }}
                />
              </View>
            </View>
          ) : (
            <Text>Add type!</Text>
          )}
        </Pressable>
      )}
      {!pressable && (
        <View>
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
              <Ionicons
                name="location"
                size={16}
                color={Colors.secondaryLight}
              />
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
                  onPress={() => {
                    // ADD DESIRED ACTION
                    setIsModalVisible(true);
                  }}
                />
              </View>
            </View>
          ) : (
            <Text>Add type!</Text>
          )}
        </View>
      )}
      <Modal
        isVisible={isModalVisible}
        // onBackButtonPress={() => {
        //   setOnModalHideDelete(false);
        //   setIsModalVisible(false);
        // }}
        // onBackdropPress={() => {
        //   setOnModalHideDelete(false);
        //   setIsModalVisible(false);
        // }}
        onModalHide={() => {
          // onModalHideDelete ? navigation.navigate("settings") : null;
          onModalHideDelete ? console.log("Activity deleted!") : null;
        }}
        // backdropColor={Colors.backgroundBlack}
        // backdropOpacity={0.8}
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop
        backdropTransitionOutTiming={0}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.modal}>
          <Text
            style={{
              color: Colors.secondaryLight,
              fontFamily: "HelveticaNeue-LightItalic",
              fontSize: 15,
              textAlign: "center",
              lineHeight: 20, // for more separation between lines
              includeFontPadding: false,
              textAlignVertical: "center",
              marginBottom: 16,
            }}
          >
            Are you sure you want to{"\n"}delete this activity?
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <RoundedTextButton
              text={"Delete"}
              color={Colors.pastelPink}
              textSize={16}
              paddingHorizontal={20}
              elevation={4}
              onPress={() => {
                setOnModalHideDelete(true);
                setIsModalVisible(false);
              }}
            />
            <RoundedTextButton
              text={"Cancel"}
              color={Colors.backgroundBlack}
              textColor={Colors.pastelPink}
              textSize={16}
              paddingHorizontal={20}
              elevation={4}
              onPress={() => {
                setOnModalHideDelete(false);
                setIsModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 20,
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
  modal: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    maxWidth: 560 - 40,
    alignItems: "center",
    elevation: 4,
  },
});
