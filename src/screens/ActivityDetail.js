import Colors from "@assets/Colors";
import Picture from "@components/Picture";
import ProgressIndicator from "@components/ProgressIndicator";
import RoundedTextButton from "@components/RoundedTextButton";
import Slider from "@components/Slider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ActivityDetail({ route, navigation }) {
  const insets = useSafeAreaInsets();

  const {
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
  } = route.params;

  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [chat, setChat] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [onModalHideDelete, setOnModalHideDelete] = useState(false);

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
      <View style={styles.inputContainer}>
        <Slider
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Pressable
          style={[styles.horizontalView, { gap: 20 }]}
          onPress={() => {
            navigation.navigate("profileDetail", {}); // Change for modal
          }}
          // onPress={() => {
          //   console.log(`user "${tag}" clicked`);
          // }}
        >
          <Picture size={60} />
          <Text
            style={[
              styles.mainText,
              { fontFamily: "HelveticaNeue-MediumItalic", fontSize: 20 },
            ]}
          >
            {firstName} {lastName}
            {"\n"}proposed an activity!
          </Text>
        </Pressable>
        <View style={styles.separator} />

        <View>
          <View style={styles.topInfoView}>
            {type === "received" ? (
              <Text style={styles.topText}>{tag}</Text>
            ) : type === "sent" ? (
              <Text style={styles.topText}>you</Text>
            ) : (
              <Text>Add type!</Text>
            )}
            <Text style={styles.topText}>{category}</Text>
            <Text style={styles.topText}>{remainingTime}</Text>
          </View>
          <View>
            <Text style={[styles.mainText, { marginBottom: 10 }]}>{title}</Text>
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
            <View style={styles.map} />
            <View
              style={[
                styles.horizontalView,
                {
                  gap: 100,
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text style={styles.descriptionText}>Address:</Text>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={styles.descriptionText}>Solnavägen 12</Text>
                <Text
                  style={[
                    styles.descriptionText,
                    { marginTop: 4, marginBottom: 8 },
                  ]}
                >
                  160 50, Solna
                </Text>
                <RoundedTextButton
                  text={"Get directions"}
                  color={Colors.pastelPurple}
                  textSize={12}
                  paddingHorizontal={16}
                />
              </View>
            </View>
            <View
              style={[
                styles.horizontalView,
                {
                  marginTop: 16,
                  gap: 65,
                  alignItems: "flex-start",
                },
              ]}
            >
              <Text style={styles.descriptionText}>Opening hours:</Text>
              <View>
                <Text style={styles.descriptionText}>
                  Mon - Fri:{"   "}08:00 - 22:00
                </Text>
                <View
                  style={[
                    styles.horizontalView,
                    { justifyContent: "space-between", marginTop: 4 },
                  ]}
                >
                  <Text style={styles.descriptionText}>Sat:</Text>
                  <Text style={styles.descriptionText}>09:00 - 22:00</Text>
                </View>
                <View
                  style={[
                    styles.horizontalView,
                    { justifyContent: "space-between", marginTop: 4 },
                  ]}
                >
                  <Text style={styles.descriptionText}>Sun:</Text>
                  <Text style={styles.descriptionText}>09:00 - 19:00</Text>
                </View>
                {/* <Text style={styles.descriptionText}>{timetable}</Text> */}
              </View>
            </View>
            <View style={styles.separator} />
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
      </View>
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
          if (onModalHideDelete) {
            console.log("Activity deleted!");
            navigation.navigate("activities");
          } else null;
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
    backgroundColor: "transparent", // Colors.backgroundBlack,
    flexGrow: 1,
    alignItems: "center",
  },
  inputContainer: {
    // position: "absolute",
    // bottom: 0,
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 20,
    marginTop: Platform.OS === "web" ? 20 : 0,
  },
  mainText: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-BoldItalic",
    fontSize: 24,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondaryLightTransparent,
    marginVertical: 20,
    borderStyle: "solid",
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
  descriptionText: {
    fontSize: 13,
    includeFontPadding: false,
    textAlignVertical: "center",
    color: Colors.secondaryLight,
    fontFamily: "HelveticaNeue",
  },
  horizontalView: { flexDirection: "row", alignItems: "center", gap: 5 },
  bottomView: { flexDirection: "row", justifyContent: "space-between" },
  map: {
    borderRadius: 8,
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: Colors.lightGrey,
    marginVertical: 18,
  },
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
