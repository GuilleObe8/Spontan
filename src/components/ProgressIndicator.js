import Colors from "@assets/Colors";
import { Pressable, StyleSheet, View } from "react-native";

export default function ProgressIndicator({
  onPress,
  height = 12,
  width = 60,
  backgroundColor = Colors.backgroundBlack,
  mainColor = Colors.pastelPurple,
  answeredPeople,
  numPeople,
}) {
  const progressWidth = (answeredPeople * width) / numPeople;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          height: height,
          width: width,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View
        style={[
          styles.progress,
          {
            height: height,
            width: progressWidth,
            backgroundColor: mainColor,
          },
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 16,
    elevation: 3,
  },
  progress: { position: "absolute", borderRadius: 16 },
});
