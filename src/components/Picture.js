import { Image, StyleSheet, View } from "react-native";

export default function Picture({
  //   src = require("@assets/favicon.png"),
  src = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
  },
  size = 46,
}) {
  return (
    <Image
      source={src}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  );
}
