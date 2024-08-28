import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "./Colors";

export default function Icon() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBlack,
    justifyContent: "center",
    alignItems: "center",
  },
});
