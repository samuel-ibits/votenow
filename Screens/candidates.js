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
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
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
    memorandum:
      "I have always loved the sounds of a classroom. The quiet that sparks with possibility just before students shuffle in. The murmur of ideas bouncing back and forth as we explore the world together. The laughter and tiny moments of surprise you find in materials you’ve taught a million times. When I taught English here at Brandywine High School, I would spend my summer preparing for the school year about to start—filled with anticipation. But this quiet is heavy. You can hear the anxiety that echoes down empty hallways. There’s",
  },
  {
    id: "2",
    cartTitle: "Mr John Doe",
    image1: require("../assets/dp3.jpg"),
    dept: "Computer Science",
    memorandum:
      "Thank you, Joe. Thank you, Joe. As I said Joe, when you called me, “I am incredibly honored by this responsibility, and Im ready to get to work. I am ready to get to work. After the most competitive primary in history, the country received a resounding message that Joe was the person to lead us forward. And Joe Im so proud to stand with you, and I do so mindful of all the heroic and ambitious women before me; whose sacrifice, determination, and resilience makes my presence here today",
  },
  {
    id: "3",
    cartTitle: "Doe John",
    image1: require("../assets/dp4.jpg"),
    dept: "Political Science",
    memorandum:
      "Good evening, it seems like just yesterday that we were at our first convention, where my husband accepted the Republican nomination and then became our 45th president of the United States. He had the energy and enthusiasm for who should lead this nation. Its real today as it was four years ago. I know I speak for my husband and the entire family when I say we have not forgotten the incredible people who were willing to take a chance on the businessman who has never worked in politics.",
  },
  {
    id: "4",
    cartTitle: "John Jon",
    image1: require("../assets/dp1.jpg"),
    dept: "Mass Communication",
    memorandum:
      "Thank you, Joe. Thank you, Joe. As I said Joe, when you called me, “I am incredibly honored by this responsibility, and Im ready to get to work. I am ready to get to work. After the most competitive primary in history, the country received a resounding message that Joe was the person to lead us forward. And Joe Im so proud to stand with you, and I do so mindful of all the heroic and ambitious women before me; whose sacrifice, determination, and resilience makes my presence here today",
  },
  {
    id: "5",
    cartTitle: "Doe",
    image1: require("../assets/dp3.jpg"),
    dept: "Biology",
    memorandum:
      "I have always loved the sounds of a classroom. The quiet that sparks with possibility just before students shuffle in. The murmur of ideas bouncing back and forth as we explore the world together. The laughter and tiny moments of surprise you find in materials you’ve taught a million times. When I taught English here at Brandywine High School, I would spend my summer preparing for the school year about to start—filled with anticipation. But this quiet is heavy. You can hear the anxiety that echoes down empty hallways. There’s",
  },
];

export default function App({ navigation: { navigate } }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
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
      onPress={() => navigate("cartin")}
    >
      <Image
        style={{ width: 70, height: 70, borderRadius: 35 }}
        source={item.image1}
      />
      <View
        style={{
          width: "90%",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18 }} numberOfLines={1}>
          {item.cartTitle}
        </Text>
        <Text
          style={{ fontWeight: "300", fontSize: 13, width: "70%" }}
          numberOfLines={2}
        >
          {item.dept}
        </Text>
        <View style={{ alignItems: "flex-end", width: "80%" }}>
          <TouchableOpacity
            style={{
              marginVertical: 5,
              backgroundColor: Primary,
              width: 120,
              height: 35,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigate("cartin")}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                elevation: 1,
                color: "#fff",
              }}
            >
              Select
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
