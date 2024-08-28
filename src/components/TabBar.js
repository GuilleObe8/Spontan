import Colors from "@assets/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TabBar({ state, navigation, marginBottom }) {
  return (
    <View>
      <View
        style={[styles.container, { marginBottom: marginBottom, zIndex: 1 }]}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

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
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: isFocused
                      ? "HelveticaNeue-MediumItalic"
                      : "HelveticaNeue-Italic",
                    // fontSize: isFocused ? 23.5 : 24,
                  },
                ]}
              >
                {route.name}
              </Text>
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
    fontSize: 24,
  },
  hiddenText: {
    color: Colors.backgroundBlack,
    includeFontPadding: false,
    textAlignVertical: "center",
    fontFamily: "HelveticaNeue-Italic",
    fontSize: 24,
  },
});
