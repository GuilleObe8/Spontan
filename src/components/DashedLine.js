import Colors from "@assets/Colors";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { G, Rect } from "react-native-svg"; // G: group, Rect, rectangle

export default function DashedLine({
  x = 0,
  spacing = 12,
  width = 6,
  height = StyleSheet.hairlineWidth,
  color = Colors.secondaryLightTransparent,
  marginVertical = 0,
}) {
  let screenWidth = Dimensions.get("window").width;
  let dashes = new Array(Math.floor(screenWidth / spacing)).fill(null);

  return (
    <View style={{ marginVertical: marginVertical }}>
      <Svg height={height + 1} width="100%">
        <G>
          {dashes.map((_, index) => (
            <Rect
              key={index}
              x={x}
              y="0"
              width={width}
              height={height}
              fill={color}
              translateX={spacing * index}
            />
          ))}
        </G>
      </Svg>
    </View>
  );
}
