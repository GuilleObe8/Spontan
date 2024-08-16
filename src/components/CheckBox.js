import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";

// Change it so it uses the icons created in Figma

export default function CheckBox({
  text,
  textColor,
  textSize,
  textFont,
  value,
  onValueChange,
  color,
  disabled = false,
  margin = 8,
}) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={{ margin: margin }}
        value={value}
        onValueChange={onValueChange}
        color={color}
        disabled={disabled}
      />
      <Text
        style={{ color: textColor, fontSize: textSize, fontFamily: textFont }}
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

// Remember me CheckBox
// const [isChecked, setChecked] = useState(false);

// <CheckBox
//   color={Colors.secondaryLight}
//   // color={isChecked ? Colors.pastelGreen : Colors.secondaryLight}
//   text={"Remember me"}
//   textSize={15}
//   textColor={Colors.secondaryLight}
//   textFont={"HelveticaNeue-MediumItalic"}
//   value={isChecked}
//   onValueChange={setChecked}
// />;
