import Colors from "@assets/Colors";
import AddButton from "@components/AddButton";
import CheckBox from "@components/CheckBox";
import Logo from "@components/Logo";
import Picture from "@components/Picture";
import RoundedTextButton from "@components/RoundedTextButton";
import TextBox from "@components/TextBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format, isToday, isTomorrow } from "date-fns";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// TODO: - make slide up work and display on top of MainNavigator
//       - fix date and time picker on web and iOS
//       - compare start and end time
//       - check invite friends size inconsistency
//       - KeyboardAwareScrollView

export default function SendActivity() {
  const insets = useSafeAreaInsets();

  const [category, setCategory] = useState(null);

  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(
    new Date(new Date().getTime() + 3600 * 1000)
  ); // By default 1 hour
  const [timeLimit, setTimeLimit] = useState("15 minutes");
  const [mode, setMode] = useState("date");
  const [type, setType] = useState("start");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDateTime) => {
    const currentDateTime = selectedDateTime;
    setShow(false);
    if (mode === "date") setDate(currentDateTime);
    else if (mode === "time" && type === "start") setStartTime(currentDateTime);
    else if (mode === "time" && type === "end") setEndTime(currentDateTime);
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = (type) => {
    setType(type);
    showMode("time");
  };

  const formatDate = () => {
    if (isToday(date)) {
      return `Today, ${format(date, "do MMM, yyyy")}`;
    } else if (isTomorrow(date)) {
      return `Tomorrow, ${format(date, "do MMM, yyyy")}`;
    } else {
      return format(date, "eee, do MMM, yyyy");
    }
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 2);
    return maxDate;
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Just for design stage */}
      <View style={styles.topContainer}>
        <Ionicons
          name="menu"
          size={24}
          color={Colors.secondaryLight}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
        <Logo marginTop={0} />
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        />
      </View>
      {/* ^ This code should be deleted in the final version */}

      <View style={styles.inputContainer}>
        <View style={styles.slider} />
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            gap: 4,
          }}
          style={{ flexGrow: 0 }}
        >
          <RoundedTextButton paddingHorizontal={30} text={" "} textSize={13} />
          <RoundedTextButton paddingHorizontal={45} />
          <RoundedTextButton paddingHorizontal={35} />
          <RoundedTextButton paddingHorizontal={40} />
          <RoundedTextButton paddingHorizontal={30} />
          <RoundedTextButton paddingHorizontal={30} />
          <RoundedTextButton paddingHorizontal={45} />
          <RoundedTextButton paddingHorizontal={35} />
          <RoundedTextButton paddingHorizontal={40} />
          <RoundedTextButton paddingHorizontal={30} />
        </ScrollView>
        <View style={styles.separator} />
        <Text style={styles.mainText}>Activity title</Text>
        <TextBox autoCapitalize="sentences" autoCorrect={true} />
        <Text style={[styles.mainText, { marginVertical: 14 }]}>
          Description
        </Text>
        <TextBox
          placeholder={"I want to..."}
          autoCapitalize="sentences"
          autoCorrect={true}
        />
        <Text style={[styles.mainText, { marginVertical: 14 }]}>Category</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            gap: 4,
          }}
          style={{ flexGrow: 0 }}
        >
          <RoundedTextButton
            text={"Food"}
            textSize={13}
            paddingHorizontal={12}
            color={
              category === null || category === "Food"
                ? Colors.pastelBlue
                : Colors.pastelBlueTransparent
            }
            onPress={() => {
              if (category !== "Food") setCategory("Food");
              else setCategory(null);
            }}
          />
          <RoundedTextButton
            text={"Drinks"}
            textSize={13}
            paddingHorizontal={12}
            color={
              category === null || category === "Drinks"
                ? Colors.pastelYellow
                : Colors.pastelYellowTransparent
            }
            onPress={() => {
              if (category !== "Drinks") setCategory("Drinks");
              else setCategory(null);
            }}
          />
          <RoundedTextButton
            text={"Sport"}
            textSize={13}
            paddingHorizontal={12}
            color={
              category === null || category === "Sport"
                ? Colors.pastelGreen
                : Colors.pastelGreenTransparent
            }
            onPress={() => {
              if (category !== "Sport") setCategory("Sport");
              else setCategory(null);
            }}
          />
          <RoundedTextButton
            text={"Cinema"}
            textSize={13}
            paddingHorizontal={12}
            color={
              category === null || category === "Cinema"
                ? Colors.pastelPink
                : Colors.pastelPinkTransparent
            }
            onPress={() => {
              if (category !== "Cinema") setCategory("Cinema");
              else setCategory(null);
            }}
          />
          <RoundedTextButton
            text={"Nature"}
            textSize={13}
            paddingHorizontal={12}
            color={
              category === null || category === "Nature"
                ? Colors.pastelPurple
                : Colors.pastelPurpleTransparent
            }
            onPress={() => {
              if (category !== "Nature") setCategory("Nature");
              else setCategory(null);
            }}
          />
          <RoundedTextButton
            text={"Other"}
            textSize={13}
            paddingHorizontal={12}
            color={
              category === null || category === "Other"
                ? Colors.mainLight
                : Colors.secondaryLight
            }
            onPress={() => {
              if (category !== "Other") setCategory("Other");
              else setCategory(null);
            }}
          />
        </ScrollView>
        <Text style={[styles.mainText, { marginVertical: 14 }]}>Location</Text>
        <TextBox />
        <Text style={[styles.mainText, { marginVertical: 14 }]}>
          Date and time
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 7 }}>
          <RoundedTextButton
            onPress={showDatepicker}
            text={formatDate()}
            textSize={13}
            paddingHorizontal={12}
            color={Colors.pastelPurple}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <Text
            style={[
              styles.mainText,
              { marginBottom: 0, color: Colors.secondaryLight },
            ]}
          >
            Start:
          </Text>
          <RoundedTextButton
            onPress={() => showTimepicker("start")}
            // text={`Start: ${format(startTime, "kk:mm")}`}
            text={format(startTime, "kk:mm")}
            textSize={13}
            paddingHorizontal={12}
            color={Colors.pastelPurple}
          />
          <Text
            style={[
              styles.mainText,
              { marginBottom: 0, marginLeft: 4, color: Colors.secondaryLight },
            ]}
          >
            End:
          </Text>
          {/* <Text
            style={[
              styles.mainText,
              { marginBottom: 0, color: Colors.secondaryLight },
            ]}
          >
            -
          </Text> */}
          <RoundedTextButton
            onPress={() => showTimepicker("end")}
            // text={`End: ${format(endTime, "kk:mm")}`}
            text={format(endTime, "kk:mm")}
            textSize={13}
            paddingHorizontal={12}
            color={Colors.pastelPurple}
          />
        </View>
        <Text style={[styles.mainText, { marginVertical: 14 }]}>
          Response time limit
        </Text>
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <Text
            style={[
              styles.mainText,
              {
                marginBottom: 0,
                color: Colors.secondaryLight,
              },
            ]}
          >
            Hours:
          </Text>
          <TextBox
            placeholder="00"
            keyboardType="number-pad"
            maxLength={2}
            width={36}
          />
          <Text
            style={[
              styles.mainText,
              {
                marginBottom: 0,
                marginLeft: 4,
                color: Colors.secondaryLight,
              },
            ]}
          >
            Minutes:
          </Text>
          <TextBox
            placeholder="00"
            keyboardType="number-pad"
            maxLength={2}
            width={36}
          />
          <Text
            style={[
              styles.mainText,
              {
                marginBottom: 0,
                marginLeft: 4,
                color: Colors.secondaryLight,
              },
            ]}
          >
            Seconds:
          </Text>
          <TextBox
            placeholder="00"
            keyboardType="number-pad"
            maxLength={2}
            width={36}
          />
        </View>
        <Text style={[styles.mainText, { marginVertical: 14 }]}>
          Invite friends
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <AddButton
            circleSize={42}
            crossSize={28}
            crossColor={Colors.backgroundGrey}
          />
          <AddedFriend />
          <AddedFriend />
          <AddedFriend />
        </View>
        <View style={styles.separator} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CheckBox
            text={"Save as template"}
            textColor={Colors.secondaryLight}
            textFont={"HelveticaNeue-Italic"}
            textSize={14}
          />
          <RoundedTextButton
            text={"Send"}
            color={Colors.pastelGreen}
            textSize={12}
            paddingHorizontal={16}
          />
        </View>
        {show && (
          <DateTimePicker
            value={
              mode === "date" ? date : type === "start" ? startTime : endTime
            }
            // display="spinner"
            // positiveButton={{ textColor: Colors.mainLight }}
            // negativeButton={{ textColor: Colors.mainLight }}
            minimumDate={new Date()}
            maximumDate={getMaxDate()}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
}

function AddedFriend() {
  return (
    <View style={{ alignItems: "center", gap: 1 }}>
      <Picture size={42} />
      <Text
        style={[
          styles.mainText,
          { marginBottom: 0, fontSize: 13, color: Colors.secondaryLight },
        ]}
      >
        tag
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundBlack,
    flexGrow: 1,
    alignItems: "center",
  },
  topContainer: {
    opacity: 0.2,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    maxWidth: 560,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundGrey,
    width: "92%",
    maxWidth: 560,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 20,
    marginTop: 20,
  },
  slider: {
    backgroundColor: Colors.secondaryLight,
    width: "20%",
    height: "0.7%",
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.secondaryLightTransparent,
    marginVertical: 20,
    borderStyle: "solid",
  },
  mainText: {
    color: Colors.mainLight,
    fontFamily: "HelveticaNeue-Italic",
    fontSize: 14,
    marginBottom: 6,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
