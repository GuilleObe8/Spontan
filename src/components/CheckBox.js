import Colors from "@assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CheckBox({
  text,
  description,
  textColor,
  descriptionColor,
  textSize,
  descriptionSize,
  textFont,
  descriptionFont,
  value,
  onValueChange,
  color = Colors.textBoxGrey,
  marginLeft = 10,
  descriptionMarginTop = 4,
}) {
  return (
    <View>
      <View style={styles.horizontalContainer}>
        <Pressable onPress={onValueChange}>
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
            marginLeft: marginLeft,
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
      {description ? (
        <Text
          style={{
            marginLeft: marginLeft + 20,
            marginTop: descriptionMarginTop,
            color: descriptionColor,
            fontSize: descriptionSize,
            fontFamily: descriptionFont,
            includeFontPadding: false,
            textAlignVertical: "center",
          }}
        >
          {description}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
