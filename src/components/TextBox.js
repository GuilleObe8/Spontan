import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../assets/Colors";

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
  rightIcon,
  validate,
}) {
  return (
    <View>
      <Text style={styles.label}>{labelText}</Text>
      <View style={styles.input}>
        <TextInput
          style={
            rightIcon
              ? [styles.textInput, { paddingRight: 40 }]
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
  },
  input: {
    justifyContent: "center",
  },
  textInput: {
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.textBoxGrey,
    paddingHorizontal: 10,
    fontSize: 15,
    fontFamily: "HelveticaNeue-LightItalic",
    color: Colors.secondaryLight,
    overflow: "scroll",
  },
  rightIcon: {
    position: "absolute",
    right: 10,
  },
});

// Email TextBox
// import Ionicons from '@expo/vector-icons/Ionicons';

// const [email, setEmail] = useState();
// const [emailError, setEmailError] = useState();

// <TextBox
//   labelText={"Email"}
//   placeholder={"e.g. mail@mail.com"}
//   onChangeText={setEmail}
//   keyboardType={"email-address"}
//   autoComplete={"email"}
//   validate={() => {
//     if (email.length < 4)
//       setEmailError("The email address you entered is incorrect.");
//     else setEmailError(false);
//   }}
//   errorMessage={emailError}
// />;

// ---

// Password TextBox
// const [password, setPassword] = useState();
// const [passwordError, setPasswordError] = useState();
// const [showPassword, setShowPassword] = useState(false);

// <TextBox
//   labelText={"Password"}
//   onChangeText={setPassword}
//   rightIcon={
//     <Pressable onPress={() => setShowPassword(!showPassword)}>
//       {!showPassword ? (
//         <Ionicons name="eye" size={20} color={Colors.secondaryLight} />
//       ) : (
//         <Ionicons name="eye-off" size={20} color={Colors.secondaryLight} />
//       )}
//     </Pressable>
//   }
//   secureTextEntry={!showPassword} // Default secure set to true
// />;
