import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import RoundedTextButton from "@components/RoundedTextButton";
import Slogan from "@components/Slogan";
import TextBox from "@components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Register({ navigation }) {
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

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password2)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log("email:", user.email, "uid:", user.uid);
          setIsModalVisible(true);
        } else {
          console.log(user);
          Alert.alert("Register failed", user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert("Register failed", errorMessage);
      });
  };

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
          labelText={"First name"}
          value={firstName}
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
          value={lastName}
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
          value={tag}
          onChangeText={setTag}
          autoComplete={"username"}
          // validate={() => {
          //   if (tag.length < 6)
          //     setTagError("The tag you entered is incorrect.");
          //   else setTagError(false);
          // }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Email"}
          value={email}
          onChangeText={setEmail}
          keyboardType={"email-address"}
          autoComplete={"email"}
          // validate={() => {
          //   if (email.length < 10)
          //     setEmailError("The email address you entered is incorrect.");
          //   else setEmailError(false);
          // }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Password"}
          value={password1}
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
          // validate={() => {
          //   if (password1.length < 2)
          //     setPasswordError1("The password you entered is incorrect.");
          //   else setPasswordError1(false);
          // }}
        />
        <View style={{ marginVertical: 8 }} />
        <TextBox
          labelText={"Confirm password"}
          value={password2}
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
          // validate={() => {
          //   if (!(password2 === password1))
          //     setPasswordError2("The passwords do not match.");
          //   else setPasswordError2(false);
          // }}
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
          <RoundedTextButton
            onPress={handleRegister}
            text={"Register"}
            color={Colors.pastelBlue}
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
            Already have an account?
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("login");
            }}
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
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={() => {
          setIsModalVisible(false);
        }}
        onBackdropPress={() => {
          setIsModalVisible(false);
        }}
        onModalHide={() => {
          navigation.navigate("login");
        }}
        // backdropColor={Colors.backgroundBlack}
        // backdropOpacity={0.8}
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop
        backdropTransitionOutTiming={0}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.modal}>
          <Text
            style={{
              color: Colors.secondaryLight,
              fontFamily: "HelveticaNeue-LightItalic",
              fontSize: 15,
              textAlign: "center",
              lineHeight: 20, // for more separation between lines
              includeFontPadding: false,
              textAlignVertical: "center",
              marginBottom: 16,
            }}
          >
            Check your inbox and follow the{"\n"}instructions to activate your
            account
          </Text>
          <RoundedTextButton
            text={"Ok"}
            color={Colors.pastelBlue}
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </Modal>
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
  modal: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    maxWidth: 560 - 40,
    alignItems: "center",
    elevation: 4,
  },
});
