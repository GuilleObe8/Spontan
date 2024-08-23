import Activity_A from "@components/Activity_A";
import Activity_B from "@components/Activity_B";
import Activity_C from "@components/Activity_C";
import Activity_D from "@components/Activity_D";
import { ScrollView, View } from "react-native";

export default function Activity_test() {
  return (
    <ScrollView>
      <Activity_A type="received" />
      <View style={{ marginVertical: 8 }} />
      <Activity_B type="received" />
      <View style={{ marginVertical: 8 }} />
      <Activity_C type="received" />
      <View style={{ marginVertical: 8 }} />
      <Activity_D type="received" />
      <View style={{ marginVertical: 8 }} />
    </ScrollView>
  );
}
