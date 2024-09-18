import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, View, Platform } from "react-native";

export default function AddButton() {
  return (
    <View style={styles.container}>
      <Pressable>
        <MaterialCommunityIcons
          name="circle"
          size={72}
          color={Colors.pastelPurple}
          style={{ zIndex: 0 }}
        />
        <Ionicons
          name="add-outline"
          size={60}
          color={Colors.backgroundBlack}
          style={{
            position: "absolute",
            bottom: 6.5,
            left: 6.5,
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // bottom: 8,
    bottom: Platform.OS === "ios" ? 22 : 10,
  },
});
