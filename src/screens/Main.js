import Colors from "@assets/Colors";
import Activity_A from "@components/Activity_A";
import Activity_B from "@components/Activity_B";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// Check strategy for no activities

export default function Main({ scrollRef }) {
  const [activitiesCount, setActivitiesCount] = useState(4);

  const defaultRef = useRef(null);
  const ref = scrollRef || defaultRef;
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
          <Activity_A type="received" />
          <View style={{ marginVertical: 8 }} />
          <Activity_A type="received" />
          <View style={{ marginVertical: 8 }} />
          <Activity_A type="received" />
          <View style={{ marginVertical: 8 }} />
          <Activity_B type="received" />
          {/* <View style={{ marginVertical: 4 }} /> */}
        </View>
      ) : (
        <Text style={styles.text}>
          You have not received any activity yet :{"/"}
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.backgroundBlack,
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
