import Colors from "@assets/Colors";
import { Pressable, View } from "react-native";

export default function AddButton({
  circleSize = 60,
  circleColor = Colors.pastelPurple,
  crossSize = 38,
  crossColor = Colors.backgroundBlack,
  style = {},
}) {
  return (
    <View style={style}>
      <Pressable>
        <View
          style={{
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
            backgroundColor: circleColor,
            zIndex: 0,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: (circleSize - crossSize) / 2,
            left: (circleSize - 2) / 2,
            width: 2,
            height: crossSize,
            borderRadius: crossSize / 2,
            backgroundColor: crossColor,
            zIndex: 0,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: (circleSize - 2) / 2,
            left: (circleSize - crossSize) / 2,
            width: crossSize,
            height: 2,
            borderRadius: crossSize / 2,
            backgroundColor: crossColor,
            zIndex: 0,
          }}
        />
      </Pressable>
    </View>
  );
}
