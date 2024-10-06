import Colors from "@assets/Colors";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Useful video: https://www.youtube.com/watch?v=HFVhEephjWc

export default function TextBox({
  labelText,
  placeholder,
  onChangeText,
  keyboardType = "default", // default, number-pad, decimal-pad, numeric, email-address, phone-pad, url
  autoCapitalize = "none", // characters, words, sentences, none
  autoComplete = "off", // additional-name, address-line1, address-line2, birthdate-day, birthdate-full, birthdate-month, birthdate-year, cc-csc, cc-exp, cc-exp-day, cc-exp-month, cc-exp-year, cc-number, country, current-password, email, family-name, given-name, honorific-prefix, honorific-suffix, name, new-password, off, one-time-code, postal-code, street-address, tel, username
  autoCorrect = false,
  secureTextEntry = false,
  leftIcon,
  paddingLeft = 36,
  rightIcon,
  paddingRight = 40,
  validate,
}) {
  return (
    <View>
      {labelText ? <Text style={styles.label}>{labelText}</Text> : null}
      <View style={styles.input}>
        <View style={styles.leftIcon}>{leftIcon}</View>
        <TextInput
          style={
            rightIcon && leftIcon
              ? [
                  styles.textInput,
                  { paddingLeft: paddingLeft, paddingRight: paddingRight },
                ]
              : leftIcon
              ? [styles.textInput, { paddingLeft: paddingLeft }]
              : rightIcon
              ? [styles.textInput, { paddingRight: paddingRight }]
              : styles.textInput
          }
          // placeholder={
          //   placeholder
          //     ? placeholder
          //     : labelText
          //     ? `Enter ${labelText.toLowerCase()}`
          //     : ""
          // } // If the placeholder is passed it's used (placeholder ? placeholder). If it's not, if there is a label, the text Enter + label is used (: labelText ? `Enter ${labelText.toLowerCase()}`). If there is no label, leave empty.
          placeholder={placeholder}
          placeholderTextColor={Colors.tertiaryLight}
          cursorColor={Colors.secondaryLight}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          secureTextEntry={secureTextEntry}
          onEndEditing={validate} // When finish editing (when click outside the TextInput or press enter), use the function validate to check if the value introduced follows the expected format
        />
        <View style={styles.rightIcon}>{rightIcon}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 17,
    marginBottom: 6,
    lineHeight: 28,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  input: {
    justifyContent: "center",
  },
  textInput: {
    height: 28,
    borderRadius: 8,
    backgroundColor: Colors.textBoxGrey,
    paddingHorizontal: 10,
    fontSize: 13,
    includeFontPadding: false,
    textAlignVertical: "center",
    fontFamily: "HelveticaNeue-LightItalic",
    color: Colors.secondaryLight,
    overflow: "scroll",
  },
  leftIcon: {
    position: "absolute",
    left: 10,
    zIndex: 1,
  },
  rightIcon: {
    position: "absolute",
    right: 10,
    zIndex: 1,
  },
});
