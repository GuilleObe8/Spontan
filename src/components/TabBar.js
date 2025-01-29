import Colors from "@assets/Colors";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabBar({ state, navigation, marginBottom }) {
  return (
    <View>
      <View
        style={[styles.container, { marginBottom: marginBottom, zIndex: 1 }]}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const scale = useSharedValue(0);

          useEffect(() => {
            scale.value = withSpring(
              typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
              { duration: 150, dampingRatio: 0.8 },
            );
          }, [scale, isFocused]);

          const animatedTextStyle = useAnimatedStyle(() => {
            const scaleValue = interpolate(scale.value, [0, 1], [0.9, 1]);
            return {
              transform: [{ scale: scaleValue }],
            };
          });

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
            >
              <Animated.View
                style={[
                  animatedTextStyle,
                  { backgroundColor: Colors.backgroundBlack },
                ]}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      fontFamily: isFocused
                        ? "HelveticaNeue-MediumItalic"
                        : "HelveticaNeue-Italic",
                    },
                  ]}
                >
                  {route.name}
                </Text>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
      <View style={[styles.container, { position: "absolute" }]}>
        <Text style={styles.hiddenText}>friends</Text>
        <Text style={[styles.text, { fontSize: 18 }]}>|</Text>
        <Text style={styles.hiddenText}>main</Text>
        <Text style={[styles.text, { fontSize: 18 }]}>|</Text>
        <Text style={styles.hiddenText}>activities</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: Colors.mainLight,
    includeFontPadding: false,
    textAlignVertical: "center",
    fontFamily: "HelveticaNeue-Italic",
    fontSize: 28,
    paddingHorizontal: 5,
  },
  hiddenText: {
    color: Colors.backgroundBlack,
    includeFontPadding: false,
    textAlignVertical: "center",
    fontFamily: "HelveticaNeue-Italic",
    fontSize: 28,
  },
});
