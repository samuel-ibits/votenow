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
import BigButton1 from "../Components/Buttons/BigBtn";
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
];

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
        <Ionicons name="checkmark" size={25} color="#027314" />
      </View>
    </View>
  </TouchableOpacity>
);

export default function VoteScreen() {
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

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          marginVertical: 10,
          backgroundColor: "#eee",
          width: windowWidth - 30,
          padding: 20,
        }}
      >
        <Ionicons name="add-circle-outline" size={48} color="#888" />

        <Text style={{ color: TextGrey, fontWeight: "500", fontSize: 16 }}>
          Select candidates in another category
        </Text>
      </View>
      <BigButton1 title='Vote Now'/>
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
