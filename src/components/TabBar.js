import Colors from "@assets/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

// Check separators spacing when fontFamily changes

export default function TabBar({ state, navigation, gap = 20 }) {
  let i = 0;

  return (
    <View style={[styles.container, { paddingBottom: 20, gap: gap }]}>
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

        i++;

        return (
          <View key={route.name} style={[styles.container, { gap: gap }]}>
            <Pressable
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
                    fontSize: 24,
                  },
                ]}
              >
                {route.name}
              </Text>
            </Pressable>
            {i !== 3 && (
              <Text
                style={[
                  styles.text,
                  { fontFamily: "HelveticaNeue-Italic", fontSize: 24 },
                ]}
              >
                |
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.mainLight,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
