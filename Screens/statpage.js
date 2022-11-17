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
} from "react-native";

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

const DATA = [
  {
    id: "1",
    cartTitle: "John Doe",
    image1: require("../assets/dp2.jpg"),
    dept: "History and International Realations",
    numOfVote: "400",
    VotesUp: "343,109",
    memorandum:
      "I have always loved the sounds of a classroom. The quiet that sparks with possibility just before students shuffle in. The murmur of ideas bouncing back and forth as we explore the world together. The laughter and tiny moments of surprise you find in materials you’ve taught a million times. When I taught English here at Brandywine High School, I would spend my summer preparing for the school year about to start—filled with anticipation. But this quiet is heavy. You can hear the anxiety that echoes down empty hallways. There’s",
  },
  {
    id: "2",
    cartTitle: "Mr John Doe",
    image1: require("../assets/dp3.jpg"),
    dept: "Computer Science",
    numOfVote: "230",
    VotesUp: "43,044",
    memorandum:
      "Thank you, Joe. Thank you, Joe. As I said Joe, when you called me, “I am incredibly honored by this responsibility, and Im ready to get to work. I am ready to get to work. After the most competitive primary in history, the country received a resounding message that Joe was the person to lead us forward. And Joe Im so proud to stand with you, and I do so mindful of all the heroic and ambitious women before me; whose sacrifice, determination, and resilience makes my presence here today",
  },
  {
    id: "3",
    cartTitle: "Doe John",
    image1: require("../assets/dp4.jpg"),
    dept: "Political Science",
    numOfVote: "750",
    VotesUp: "943,23",
    memorandum:
      "Good evening, it seems like just yesterday that we were at our first convention, where my husband accepted the Republican nomination and then became our 45th president of the United States. He had the energy and enthusiasm for who should lead this nation. Its real today as it was four years ago. I know I speak for my husband and the entire family when I say we have not forgotten the incredible people who were willing to take a chance on the businessman who has never worked in politics.",
  },
  {
    id: "4",
    cartTitle: "John Jon",
    image1: require("../assets/dp1.jpg"),
    dept: "Mass Communication",
    numOfVote: "790",
    VotesUp: "143,00",
    memorandum:
      "Thank you, Joe. Thank you, Joe. As I said Joe, when you called me, “I am incredibly honored by this responsibility, and Im ready to get to work. I am ready to get to work. After the most competitive primary in history, the country received a resounding message that Joe was the person to lead us forward. And Joe Im so proud to stand with you, and I do so mindful of all the heroic and ambitious women before me; whose sacrifice, determination, and resilience makes my presence here today",
  },
  {
    id: "5",
    cartTitle: "Doe",
    image1: require("../assets/dp3.jpg"),
    dept: "Biology",
    numOfVote: "920",
    VotesUp: "543,04",
    memorandum:
      "I have always loved the sounds of a classroom. The quiet that sparks with possibility just before students shuffle in. The murmur of ideas bouncing back and forth as we explore the world together. The laughter and tiny moments of surprise you find in materials you’ve taught a million times. When I taught English here at Brandywine High School, I would spend my summer preparing for the school year about to start—filled with anticipation. But this quiet is heavy. You can hear the anxiety that echoes down empty hallways. There’s",
  },
];

export default function Statpage({ navigation, route, options, back }) {
  let [fontLoaded] = useFonts({
    Bold: require("../assets/fonts/Nunito-Black.ttf"),
    light: require("../assets/fonts/Nunito-Light.ttf"),
    Regular: require("../assets/fonts/Nunito-Regular.ttf"),
    SemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => (
    <View
      style={{
        width: windowWidth - 10,
        height: windowHeight / 5,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 30, height: 30, borderRadius: 15, marginTop: -70 }}
        source={item.image1}
      />
      <View
        style={{
          width: "80%",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{ fontWeight: "600", fontSize: 18, fontFamily: "SemiBold" }}
          numberOfLines={1}
        >
          {item.cartTitle}
        </Text>
        <Text
          style={{
            fontWeight: "200",
            fontSize: 13,
            width: "70%",
            fontFamily: "light",
          }}
          numberOfLines={2}
        >
          {item.dept}
        </Text>
        <View
          style={{
            width: windowWidth - 30,
            marginLeft: -40,
            justifyContent: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text
            style={{ fontSize: 25, fontWeight: "600", fontFamily: "Regular" }}
          >
            {item.VotesUp}
          </Text>

          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{ color: "#777", fontWeight: "500", fontFamily: "Bold" }}
            >
              Polling units
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                fontFamily: "SemiBold",
              }}
            >
              {item.numOfVote}/176946
            </Text>
          </View>
        </View>
      </View>

      
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#027314"
        barStyle={"light-content"}
        hidden={false}
      />
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

<TouchableOpacity
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          borderRadius: 25,
          elevation: 100,
          bottom: 50,
          right: 30,
          backgroundColor: Primary,
          justifyContent: "center",
          alignItems: "center",
        }}

        onPress={navigation.goBack}
      >
        <Ionicons name="ios-bar-chart-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
  },
});
