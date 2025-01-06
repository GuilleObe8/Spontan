import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Platform,
  Pressable,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import Colors from "@assets/Colors";

export default function Slider({ onPress }) {
  let screenWidth =
    Dimensions.get("window").width > 560 ? 560 : Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;

  return (
    <View>
      {Platform.OS === "web" && (
        <Pressable style={styles.button} onPress={onPress}>
          <Ionicons
            name="chevron-down"
            size={24}
            color={Colors.secondaryLight}
          />
        </Pressable>
      )}
      {Platform.OS !== "web" && (
        <View
          style={[
            styles.slider,
            {
              width: (screenWidth * 20) / 100,
              height: (screenHeight * 0.7) / 100,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginBottom: 20,
  },
  slider: {
    backgroundColor: Colors.secondaryLight,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
});
