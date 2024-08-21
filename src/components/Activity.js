import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import RoundedTextButton from "./RoundedTextButton";
import ProgressIndicator from "./ProgressIndicator";

const { width, height } = Dimensions.get("window");

// Test with very long title and description

export default function Activity({
  type, // "received", "sent"
  tag = "@tag",
  category = "category",
  publishTime = "00:00",
  title = "Gym",
  description = "Join me at the gym tomorrow at 15:00!",
  date = "Tomorrow",
  activityTime = "15:00 - 16:00",
  place = "SATS Solna",
  answeredPeople = 3,
  numPeople = 7,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {type === "received" ? (
          <Text style={styles.topText}>{tag}</Text>
        ) : type === "sent" ? (
          <Text style={styles.topText}>you</Text>
        ) : (
          <Text>Add type!</Text>
        )}
        <Text style={styles.topText}>{category}</Text>
        <Text style={styles.topText}>{publishTime}</Text>
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
          <Ionicons name="location" size={16} color={Colors.secondaryLight} />
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
              text={"Yes!"}
              color={Colors.pastelGreen}
              textSize={12}
              paddingHorizontal={16}
            />
            <RoundedTextButton
              text={"No"}
              color={Colors.pastelPink}
              textSize={12}
              paddingHorizontal={16}
            />
            <RoundedTextButton
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
              color={Colors.pastelBlue}
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
              text={"Delete event"}
              color={Colors.pastelPink}
              textSize={12}
              paddingHorizontal={16}
            />
          </View>
        </View>
      ) : (
        <Text>Add type!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    // height: 200,
    // aspectRatio: 16 / 10,
    width: "92%",
    maxWidth: 560,
    alignSelf: "center",
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 8,
    padding: 20,
    elevation: 4,
  },
  topView: {
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
});
