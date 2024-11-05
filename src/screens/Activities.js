import Colors from "@assets/Colors";
import Activity_A from "@components/Activity_A";
import Activity_B from "@components/Activity_B";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// Check strategy for no activities

export default function Activities() {
  const [activitiesCount, setActivitiesCount] = useState(4);

  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { justifyContent: activitiesCount !== 0 ? "flex-start" : "center" },
      ]}
      // showsVerticalScrollIndicator={false}
      ref={ref}
    >
      {activitiesCount !== 0 ? (
        <View style={{ alignItems: "center" }}>
          <Activity_A type="sent" />
          <View style={{ marginVertical: 8 }} />
          <Activity_A type="sent" />
          <View style={{ marginVertical: 8 }} />
          <Activity_A type="sent" />
          <View style={{ marginVertical: 8 }} />
          <Activity_B type="sent" />
          {/* <View style={{ marginVertical: 4 }} /> */}
        </View>
      ) : (
        <View style={styles.horizontalContainer}>
          <Text style={styles.text}>Start by </Text>
          <Pressable>
            <Text style={[styles.text, { color: Colors.pastelPurple }]}>
              posting an activity
            </Text>
          </Pressable>
          <Text style={styles.text}>!</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.backgroundBlack,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.secondaryLight,
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 14,
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
