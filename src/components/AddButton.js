import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform, Pressable, StyleSheet, View } from "react-native";

export default function AddButton({ size = 60 }) {
  return (
    <View style={styles.container}>
      <Pressable>
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: Colors.pastelPurple,
            zIndex: 0,
          }}
        />
        <Ionicons
          name="add-outline"
          size={size}
          color={Colors.backgroundBlack}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
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
    bottom: Platform.OS === "ios" ? 28 : 16,
  },
});
