import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  FlatList,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import BigButton1 from "../Components/Buttons/BigBtn";

import BigButton3 from "../Components/Buttons/BigBtn3";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App({ navigation: { navigate } }) {
  let [fontLoaded] = useFonts({
    Bold: require("../assets/fonts/Nunito-Black.ttf"),
    light: require("../assets/fonts/Nunito-Light.ttf"),
    Regular: require("../assets/fonts/Nunito-Regular.ttf"),
    SemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <StatusBar
          animated={true}
          backgroundColor="#027314"
          barStyle={"light-content"}
          hidden={false}
        />
        <View
          style={{
            width: windowWidth - 50,
            borderRadius: 10,
            height: windowHeight / 3,
            backgroundColor: "#929292",
            marginVertical: 20,
          }}
        ></View>

        <Text
          style={{
            width: windowWidth - 50,
            fontSize: 21,
            fontWeight: "700",
            textDecorationLine: "underline",
            color: "#656565",
            lineHeight: 24,
            marginVertical: 10,
          }}
        >
          Accreditation
        </Text>
        <Text
          style={{
            width: windowWidth - 50,
            fontSize: 20,
            fontWeight: "300",
            color: "#656565",
            lineHeight: 24,
          }}
        >
          Get accredited befor the day of election through few steps
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Primary,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            padding: 12,
            width: windowWidth - 30,
            elevation: 5,
            marginVertical: 10,
          }}
          onPress={() => navigate("vote")}
        >
          <Text style={{ color: Surface2, fontSize: 16, fontWeight: "500" }}>
            Start
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: windowWidth - 50,
            borderRadius: 10,
            height: windowHeight / 3,
            backgroundColor: "#929292",
            marginVertical: 20,
          }}
        ></View>

        <Text
          style={{
            width: windowWidth - 50,
            fontSize: 21,
            fontWeight: "700",
            textDecorationLine: "underline",
            color: "#656565",
            lineHeight: 24,
            marginVertical: 10,
          }}
        >
          Voting
        </Text>
        <Text
          style={{
            width: windowWidth - 50,
            fontSize: 20,
            fontWeight: "300",
            color: "#656565",
            lineHeight: 24,
          }}
        >
          Get accredited befor the day of election through few steps
        </Text>
      
        <TouchableOpacity
        style={{
          backgroundColor: '#929292',
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 12,
          width: windowWidth - 30,
          elevation: 5,
          marginVertical: 10,
        }}

        onPress={() => navigate("scan")}
      >
        <Text style={{ color: Surface2, fontSize: 16, fontWeight: "500" }}>
         Start
        </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
