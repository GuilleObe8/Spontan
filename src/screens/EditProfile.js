import Colors from "@assets/Colors";
import Picture from "@components/Picture";
import TextBox from "@components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function EditProfile({ navigation }) {
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
      <View style={styles.topContainer}>
        <Pressable
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          onPress={() => {
            navigation.navigate("settings");
          }}
        >
          <Ionicons
            name="close-outline"
            size={24}
            color={Colors.secondaryLight}
          />
        </Pressable>
        <Text style={styles.text}>Edit Profile</Text>
        <Pressable
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
          onPress={() => {
            navigation.navigate("settings");
          }}
        >
          <Ionicons
            name="checkmark-outline"
            size={24}
            color={Colors.secondaryLight}
          />
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <View>
            <Picture size={90} />
            <Pressable>
              <Ionicons
                style={{ position: "absolute", right: 0, bottom: 0 }}
                name="ellipse-sharp"
                size={24}
                color={Colors.backgroundGrey}
              />
              <Ionicons
                style={{ position: "absolute", right: 2, bottom: 2 }}
                name="add-circle-outline"
                size={20}
                color={Colors.mainLight}
              />
            </Pressable>
          </View>
        </View>
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
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.backgroundBlack,
    alignItems: "center",
  },
  topContainer: {
    marginTop: 21, // Adjust depending on Logo size on TopTabNavigatorgator
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    maxWidth: 560,
  },
  text: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-MediumItalic",
    fontSize: 18,
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderRadius: 8,
    padding: 30,
    marginTop: 24,
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
});
