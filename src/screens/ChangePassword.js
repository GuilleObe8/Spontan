import Colors from "@assets/Colors";
import Logo from "@components/Logo";
import RoundedTextButton from "@components/RoundedTextButton";
import Slogan from "@components/Slogan";
import TextBox from "@components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChangePassword({ navigation }) {
  const insets = useSafeAreaInsets();

  const [password1, setPassword1] = useState("");
  const [passwordError1, setPasswordError1] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [password2, setPassword2] = useState("");
  const [passwordError2, setPasswordError2] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

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
          labelText={"New password"}
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
          labelText={"Confirm new password"}
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
              marginTop: passwordError1 || passwordError2 ? 14 : 30,
            },
          ]}
        >
          <RoundedTextButton
            onPress={() => {
              // ADD DESIRED ACTION
              setIsModalVisible(true);
            }}
            text={"Save"}
            color={Colors.pastelPink}
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
            Back to
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
            Your password has been{"\n"}successfully updated
          </Text>
          <RoundedTextButton
            text={"Ok"}
            color={Colors.pastelPink}
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
