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
  ActivityIndicator,
} from "react-native";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

import FontAwesome from "@expo/vector-icons/FontAwesome";
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
    cartTitle: "SUG President",
    noOfCan: 6,
    electstatus: "Ongoing",
    image1: require("../assets/dp1.jpg"),
    image2: require("../assets/dp2.jpg"),
    image3: require("../assets/dp3.jpg"),
    image4: require("../assets/dp4.jpg"),
    image5: require("../assets/dp2.jpg"),
  },
  {
    id: "2",
    cartTitle: "Director of socials",
    noOfCan: 9,
    electstatus: "Ongoing",
    image1: require("../assets/dp1.jpg"),
    image2: require("../assets/dp2.jpg"),
  },
  {
    id: "3",
    cartTitle: "Director of sports",
    noOfCan: 1,
    electstatus: "Completed",
    image1: require("../assets/dp2.jpg"),
    image2: require("../assets/dp3.jpg"),
    image3: require("../assets/ads4.jpg"),
  },
  {
    id: "4",
    cartTitle: "Provos",
    noOfCan: 2,
    electstatus: "Upcoming",
    image1: require("../assets/dp2.jpg"),
    image2: require("../assets/dp3.jpg"),
    image3: require("../assets/dp1.jpg"),
    image4: require("../assets/dp4.jpg"),
    image5: require("../assets/dp2.jpg"),
  },
  {
    id: "5",
    cartTitle: "Finicial Secretary",
    noOfCan: 4,
    electstatus: "Upcoming",
    image1: require("../assets/dp3.jpg"),
    image2: require("../assets/dp1.jpg"),
  },
];

export default function VoteScreen({ navigation: { navigate } }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        width: windowWidth - 30,
        height: windowHeight / 5,
        borderRadius: 5,
        marginVertical: 10,
        padding: 10,
      }}
      onPress={() => navigate("cart")}
    >
      <View
        style={{ 
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18, fontFamily: "Bold" }}>
          {item.cartTitle}
        </Text>

        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            color: "#777",
            fontFamily: "Regular",
          }}
        >
          {item.electstatus}
        </Text>
      </View>
      <Text style={{ fontSize: 16, marginVertical: 5, fontFamily: "SemiBold" }}>
        Candidates: <Text style={{ fontWeight: "600" }}>{item.noOfCan}</Text>
      </Text>
     
      <View style={{ marginVertical: 5, flexDirection: "row" }}>
        <Image
          style={{ width: 30, height: 30, borderRadius: 15 }}
          source={item.image1}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
          source={item.image2}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
          source={item.image3}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
          source={item.image4}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
          source={item.image5}
        />
        <Image
          style={{ width: 30, height: 30, borderRadius: 15, marginLeft: -10 }}
          source={item.image5}
        />
      </View>
    </TouchableOpacity>
  );

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
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#027314"
        barStyle={"light-content"}
        hidden={false}
      />

      <TouchableOpacity>
        <View
          style={{ width: windowWidth - 50, marginBottom: 30, marginTop: 10 }}
        >
          <Text style={{ fontFamily: "Bold", fontSize: 21 }}>Categories</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          width: windowWidth - 60,
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 5,
          borderColor: "#ddd",
          paddingHorizontal: 15,
        }}
      >
        <Ionicons name="search" size={18} color="#575757" />
        <TextInput
          placeholder="Search category"
          placeholderTextColor={TextGrey}
          style={{ width: "90%", padding: 5, fontSize: 16 }}
        />
      </View>

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
    padding: 10,
  },

  title: {
    fontSize: 32,
  },
});
