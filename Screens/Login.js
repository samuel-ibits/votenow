import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ToastAndroid,
  ScrollView,
  Linking,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BigButton from "../Components/Buttons/BigBtn";
import Input1 from "../Components/Inputs/Inputs";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 150,
        }}
      >
        <View
          style={{
            backgroundColor: Primary,
            width: windowWidth - 40,
            height: 56,
            marginBottom: 30,
          }}
        ></View>

        <Input1 placeholder={"Matric Number"} />
        <Input1 placeholder={"Password"} />

        <BigButton title="Log in" />
        <TouchableOpacity>
          <Text style={{ fontWeight: "600", fontSize: 16, marginVertical: 20 }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ position: "absolute", bottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", color: TextGrey }}>
          Dont't have an account?
          <Text
            style={{
              fontWeight: "700",
              color: TextBlack,
              fontSize: 16,
              textDecorationLine: "underline",
              textDecorationColor: TextBlack,
            }}
          >
            Create an Account
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  leftM: {
    marginRight: 10,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
