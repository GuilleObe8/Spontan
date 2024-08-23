import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "@assets/Colors";

export default function CheckBox({
  text,
  textColor,
  textSize,
  textFont,
  value,
  onValueChange,
  color,
  marginRight = 10,
}) {
  return (
    <View style={styles.container}>
      <Pressable style={{ marginRight: marginRight }} onPress={onValueChange}>
        {!value ? (
          <Ionicons name="square" size={20} color={color} />
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="square" size={20} color={color} />
            <View style={{ position: "absolute", left: 0 }}>
              <Ionicons
                name="checkmark"
                size={20}
                color={Colors.secondaryLight}
              />
            </View>
          </View>
        )}
      </Pressable>
      <Text
        style={{
          color: textColor,
          fontSize: textSize,
          fontFamily: textFont,
          includeFontPadding: false,
          textAlignVertical: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
