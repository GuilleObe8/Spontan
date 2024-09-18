import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import RoundedTextButton from "@components/RoundedTextButton";
import Slogan from "@components/Slogan";
import TextBox from "@components/TextBox";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ForgotPassword() {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  return (
    <KeyboardAwareScrollView
      bounces={false} // for iOS
      // enableOnAndroid={true} // for Android
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
        <Text
          style={{
            color: Colors.mainLight,
            fontFamily: "HelveticaNeue-MediumItalic",
            fontSize: 17,
            lineHeight: 20,
            includeFontPadding: false,
            textAlignVertical: "center",
            marginBottom: 6,
          }}
        >
          Forgot your password?
        </Text>
        <Text
          style={{
            color: Colors.secondaryLight,
            fontFamily: "HelveticaNeue-LightItalic",
            fontSize: 15,
            lineHeight: 20,
            includeFontPadding: false,
            textAlignVertical: "center",
          }}
        >
          Write down your email address and we will send you the instructions to
          change it
        </Text>
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

        <View>
          {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}
        </View>

        <View
          style={[
            styles.button,
            {
              marginTop: emailError ? 14 : 30,
            },
          ]}
        >
          <RoundedTextButton text={"Send Email"} color={Colors.pastelPink} />
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
            Back to
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
