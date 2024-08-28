import Colors from "@assets/Colors";
import Activity_A from "@components/Activity_A";
import Activity_B from "@components/Activity_B";
import { ScrollView, StyleSheet, View } from "react-native";

// Change ScrollView to flatlist

export default function Main() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Activity_A type="received" />
      <View style={{ marginVertical: 8 }} />
      <Activity_A type="received" />
      <View style={{ marginVertical: 8 }} />
      <Activity_B type="received" />
      <View style={{ marginVertical: 8 }} />
      <Activity_B type="received" />
      <View style={{ marginVertical: 4 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlack,
    alignItems: "center",
  },
});
