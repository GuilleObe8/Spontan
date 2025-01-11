import Colors from "@assets/Colors";
import Activity_A from "@components/Activity_A";
import CheckBox from "@components/CheckBox";
import Logo from "@components/Logo";
import RoundedTextButton from "@components/RoundedTextButton";
import Slogan from "@components/Slogan";
import TextBox from "@components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { supabase } from "supabaseConfig";

export default function Login({ navigation, setIsSignedIn }) {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isChecked, setChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  let screenWidth =
    Dimensions.get("window").width > 560
      ? 560 * 1.08
      : Dimensions.get("window").width;

  async function handleLogin() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      Alert.alert(error.message);
    } else {
      console.log(data.user.email, data.user.id);
      setIsSignedIn(true);
    }
    setLoading(false);
  }

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
        <TextBox
          labelText={"Tag or email"}
          // placeholder={"e.g. mail@mail.com"}
          value={email}
          onChangeText={setEmail}
          keyboardType={"email-address"}
          autoComplete={"email"}
          validate={() => {
            // if (email.length < 1)
            //   setEmailError("The email address you entered is incorrect.");
            // else setEmailError(false);
          }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Password"}
          value={password}
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
            // if (password.length < 2)
            //   setPasswordError("The password you entered is incorrect.");
            // else setPasswordError(false);
          }}
        />
        <View style={{ marginVertical: 8 }} />
        <CheckBox
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
          <RoundedTextButton
            disabled={loading}
            onPress={handleLogin}
            text={"Log In"}
            color={Colors.pastelGreen}
          />
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
            Don't have an account?
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("register");
            }}
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
        <Pressable
          onPress={() => {
            navigation.navigate("forgotPassword");
          }}
        >
          <Text
            style={[
              styles.bottomText,
              {
                marginTop: 8,
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
        contentOffset={{ x: screenWidth * 0.92 * 1.5 + 16 }}
      >
        <Activity_A
          width={0.92 * screenWidth}
          type="received"
          pressable={false}
        />
        <View style={{ marginHorizontal: 4 }} />
        <Activity_A
          width={0.92 * screenWidth}
          type="received"
          pressable={false}
        />
        <View style={{ marginHorizontal: 4 }} />
        <Activity_A width={0.92 * screenWidth} type="sent" pressable={false} />
        <View style={{ marginHorizontal: 4 }} />

        <Activity_A
          width={0.92 * screenWidth}
          type="received"
          pressable={false}
        />
        <View style={{ marginHorizontal: 4 }} />
        <Activity_A width={0.92 * screenWidth} type="sent" pressable={false} />
      </ScrollView>
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
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  horizontalContainer: {
    flexGrow: 0,
    width: "92%",
    maxWidth: 560,
  },
});
