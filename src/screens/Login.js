import Colors from "@assets/Colors";
import Activity_C from "@components/Activity_C";
import CheckBox from "@components/CheckBox";
import Logo from "@components/Logo";
import RoundedTextButton from "@components/RoundedTextButton";
import Slogan from "@components/Slogan";
import TextBox from "@components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isChecked, setChecked] = useState(false);

  let screenWidth = Dimensions.get("window").width;

  return (
    <KeyboardAwareScrollView
      bounces={false} // for iOS
      contentContainerStyle={styles.wrapper}
    >
      <View>
        <Logo />
        <Slogan />
      </View>
      <View style={styles.inputContainer}>
        <TextBox
          labelText={"Tag or email"}
          // placeholder={"e.g. mail@mail.com"}
          onChangeText={setEmail}
          keyboardType={"email-address"}
          autoComplete={"email"}
          validate={() => {
            if (email.length < 1)
              setEmailError("The email address you entered is incorrect.");
            else setEmailError(false);
          }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Password"}
          onChangeText={setPassword}
          autoComplete={"current-password"}
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
            if (password.length < 2)
              setPasswordError("The password you entered is incorrect.");
            else setPasswordError(false);
          }}
        />
        <View style={{ marginVertical: 8 }} />
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
          {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
        </View>
        <View>
          {passwordError && (
            <Text style={styles.errorMessage}>{passwordError}</Text>
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
                  marginLeft: 3,
                  color: Colors.pastelBlueTransparent,
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
                color: Colors.pastelPinkTransparent,
              },
            ]}
          >
            Forgot password?
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalContainer}
        contentContainerStyle={{ paddingBottom: 16 }} // 4%
        contentOffset={{ x: screenWidth * 0.92 * 1.5 + 12 }}
      >
        <Activity_C width={0.92 * screenWidth} type="sent" />
        <View style={{ marginHorizontal: 4 }} />
        <Activity_C width={0.92 * screenWidth} type="received" />
        <View style={{ marginHorizontal: 4 }} />
        <Activity_C width={0.92 * screenWidth} type="sent" />
        <View style={{ marginHorizontal: 4 }} />
        <Activity_C width={0.92 * screenWidth} type="received" />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: "center",
  },
  inputContainer: {
    flexGrow: 1,
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
  registerWrapper: {
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
  horizontalContainer: {
    flexGrow: 0,
    width: "92%",
    maxWidth: 560,
  },
});
