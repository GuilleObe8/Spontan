import { View, Text } from "react-native";
import Colors from "./Colors";

export default function Icon() {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          color: Colors.mainLight,
          fontFamily: "HelveticaNeue-BoldItalic",
          textAlign: "center",
          fontSize: 56,
        }}
      >
        S!
      </Text>
    </View>
  );
}
