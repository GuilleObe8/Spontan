import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../assets/Colors";
import CheckBox from "../components/CheckBox";
import Logo from "../components/Logo";
import RoundedTextButton from "../components/RoundedTextButton";
import Slogan from "../components/Slogan";
import TextBox from "../components/TextBox";

export default function Login() {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();

  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View>
        <Logo />
        <Slogan />
      </View>
      <View style={styles.inputContainer}>
        <TextBox
          labelText={"Tag or email"}
          placeholder={"e.g. mail@mail.com"}
          onChangeText={setEmail}
          keyboardType={"email-address"}
          autoComplete={"email"}
          validate={() => {
            if (email.length < 6)
              setEmailError("The email address you entered is incorrect.");
            else setEmailError(false);
          }}
        />
        <View style={{ marginVertical: 10 }} />
        {/* <View>{!emailError && <View style={{ marginVertical: 13 }} />}</View> */}
        <TextBox
          labelText={"Password"}
          onChangeText={setPassword}
          rightIcon={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? (
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
          secureTextEntry={!showPassword} // Default secure set to true
          validate={() => {
            if (password.length > 10)
              setPasswordError("The password you entered is incorrect.");
            else setPasswordError(false);
          }}
        />
        <View style={{ marginVertical: 7 }} />
        {/* <View>{!passwordError && <View style={{ marginVertical: 13 }} />}</View> */}
        <CheckBox
          color={Colors.textBoxGrey}
          text={"Remember me"}
          textSize={14}
          textColor={Colors.secondaryLight}
          textFont={"HelveticaNeue-MediumItalic"}
          value={isChecked}
          onValueChange={() => setChecked(!isChecked)}
        />
        <View>
          {emailError && (
            <Text style={[styles.errorMessage, { color: Colors.pastelRed }]}>
              {emailError}
            </Text>
          )}
        </View>
        <View>
          {passwordError && (
            <Text style={[styles.errorMessage, { color: Colors.pastelRed }]}>
              {passwordError}
            </Text>
          )}
        </View>
        <View
          style={[
            styles.button,
            { marginTop: emailError || passwordError ? 14 : 30 },
          ]}
        >
          <RoundedTextButton text={"Log In"} color={Colors.pastelGreen} />
        </View>
        <View style={styles.registerWrapper}>
          <Text
            style={[
              styles.bottomText,
              {
                color: Colors.secondaryLight,
              },
            ]}
          >
            Don't have an account?
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
                  marginLeft: 4,
                  color: "rgba(212, 240, 252, 0.7)",
                },
              ]}
            >
              Register
            </Text>
          </Pressable>
        </View>
        <Pressable>
          <Text
            style={[
              styles.bottomText,
              {
                marginTop: 4,
                color: "rgba(253, 211, 213, 0.7)",
              },
            ]}
          >
            Forgot password?
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // borderColor: "pink",
    // borderWidth: 2,
    flex: 1,
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
    marginBottom: 12,
    elevation: 4,
    overflow: "scroll",
  },
  errorMessage: {
    marginTop: 4,
    fontFamily: "HelveticaNeue-LightItalic",
    fontSize: 13,
  },
  button: {
    alignSelf: "center",
    flexWrap: "wrap",
  },
  registerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
  },
  bottomText: {
    fontSize: 12,
    fontFamily: "HelveticaNeue-BoldItalic",
    alignSelf: "center",
  },
});
