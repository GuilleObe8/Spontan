import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import RoundedTextButton from "@components/RoundedTextButton";
import Slogan from "@components/Slogan";
import TextBox from "@components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Register() {
  const insets = useSafeAreaInsets();

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [tag, setTag] = useState("");
  const [tagError, setTagError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password1, setPassword1] = useState("");
  const [passwordError1, setPasswordError1] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [password2, setPassword2] = useState("");
  const [passwordError2, setPasswordError2] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <KeyboardAwareScrollView
      bounces={false} // for iOS
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View>
        <Logo />
        <Slogan />
      </View>
      <View style={styles.inputContainer}>
        <TextBox
          labelText={"First name"}
          onChangeText={setFirstName}
          autoCapitalize="words"
          autoComplete={"given-name"}
          // validate={() => {
          //   if (firstName.length < 10)
          //     setFirstNameError("The first name you entered is incorrect.");
          //   else setFirstNameError(false);
          // }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Last name"}
          onChangeText={setLastName}
          autoCapitalize="words"
          autoComplete={"family-name"}
          // validate={() => {
          //   if (lastName.length < 10)
          //     setLastNameError("The last name you entered is incorrect.");
          //   else setLastNameError(false);
          // }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Tag"}
          onChangeText={setTag}
          autoComplete={"username"}
          validate={() => {
            if (tag.length < 6)
              setTagError("The tag you entered is incorrect.");
            else setTagError(false);
          }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Email"}
          onChangeText={setEmail}
          keyboardType={"email-address"}
          autoComplete={"email"}
          validate={() => {
            if (email.length < 10)
              setEmailError("The email address you entered is incorrect.");
            else setEmailError(false);
          }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Password"}
          onChangeText={setPassword1}
          rightIcon={
            <Pressable onPress={() => setShowPassword1(!showPassword1)}>
              {!showPassword1 ? (
                <Ionicons name="eye" size={20} color={Colors.secondaryLight} />
              ) : (
                <Ionicons
                  name="eye-off"
                  size={20}
                  color={Colors.secondaryLight}
                />
              )}
            </Pressable>
          }
          secureTextEntry={!showPassword1}
          validate={() => {
            if (password1.length < 2)
              setPasswordError1("The password you entered is incorrect.");
            else setPasswordError1(false);
          }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Confirm password"}
          onChangeText={setPassword2}
          rightIcon={
            <Pressable onPress={() => setShowPassword2(!showPassword2)}>
              {!showPassword2 ? (
                <Ionicons name="eye" size={20} color={Colors.secondaryLight} />
              ) : (
                <Ionicons
                  name="eye-off"
                  size={20}
                  color={Colors.secondaryLight}
                />
              )}
            </Pressable>
          }
          secureTextEntry={!showPassword2}
          validate={() => {
            if (!(password2 === password1))
              setPasswordError2("The passwords do not match.");
            else setPasswordError2(false);
          }}
        />
        <View>
          {firstNameError && (
            <Text style={styles.errorMessage}>{firstNameError}</Text>
          )}
        </View>
        <View>
          {lastNameError && (
            <Text style={styles.errorMessage}>{lastNameError}</Text>
          )}
        </View>
        <View>
          {tagError && <Text style={styles.errorMessage}>{tagError}</Text>}
        </View>
        <View>
          {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
        </View>
        <View>
          {passwordError1 && (
            <Text style={styles.errorMessage}>{passwordError1}</Text>
          )}
        </View>
        <View>
          {passwordError2 && (
            <Text style={styles.errorMessage}>{passwordError2}</Text>
          )}
        </View>
        <View
          style={[
            styles.button,
            {
              marginTop:
                firstNameError ||
                lastNameError ||
                tagError ||
                emailError ||
                passwordError1 ||
                passwordError2
                  ? 14
                  : 30,
            },
          ]}
        >
          <RoundedTextButton text={"Register"} color={Colors.pastelBlue} />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text
            style={[
              styles.bottomText,
              {
                color: Colors.secondaryLight,
              },
            ]}
          >
            Already have an account?
          </Text>
          <Pressable
          //   onPress={() => {
          //     navigate("ForgotPass");
          //   }}
          >
            <Text
              style={[
                styles.bottomText,
                {
                  marginLeft: 3,
                  color: Colors.pastelGreenTransparent,
                },
              ]}
            >
              Log In
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlack,
    flexGrow: 1,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderRadius: 8,
    padding: 30,
    marginTop: 32,
    marginBottom: 16, // "4%"
    elevation: 4,
  },
  errorMessage: {
    color: Colors.pastelRed,
    fontFamily: "HelveticaNeue-LightItalic",
    fontSize: 13,
    lineHeight: 18,
    includeFontPadding: false,
    textAlignVertical: "center",
    marginTop: 8,
  },
  button: {
    alignSelf: "center",
    flexWrap: "wrap",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
  },
  bottomText: {
    fontFamily: "HelveticaNeue-BoldItalic",
    fontSize: 12,
    alignSelf: "center",
    lineHeight: 20,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
