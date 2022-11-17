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
  ActivityIndicator,
} from "react-native";

import { useFonts } from "expo-font";
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
    image: require("../assets/ads4.jpg"),
    caption:
      "You can use the theming support in react-native-paper to customize the material bottom navigation by wrapping your app in Provider from react-native-paper. A common use ",
  },
  {
    id: "2",
    image: require("../assets/ads1.jpg"),
    caption:
      "tomize the material bottom navigation by wrapping your app in Provider from react-native-paper. A common use ",
  },
  {
    id: "3",
    image: require("../assets/ads5.webp"),
    caption:
      "tomize the material bottom navigation by wrapping your app in Provider from react-native-paper. A common use ",
  },
  {
    id: "4",
    image: require("../assets/ads6.webp"),
    caption:
    "tomize the material bottom navigation by wrapping your app in Provider from react-native-paper. A common use ",

  },
  {
    id: "5",
    image: require("../assets/ads3.webp"),
    caption:
      "tomize the material bottom navigation by wrapping your app in Provider from react-native-paper. A common use ",
  },
  {
    id: "6",
    image: require("../assets/ads.webp"),
    caption:
      "tomize the material bottom navigation by wrapping your app in Provider from react-native-paper. A common use ",
  },
];

const renderItem = ({ item }) => (
  <View style={{backgroundColor:Surface2,marginVertical:20}}>
    <Image
      style={{
        width: windowWidth - 20,
        height: windowHeight / 5,
        backgroundColor: TextBlack,
        elevation: 2,
        marginBottom:10,
        borderRadius: 5,
      }}
      source={item.image}
    />
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding:10
      }}
    >
      <Text style={{ fontWeight: "300", fontSize: 15,fontFamily:'light' }}>{item.caption}</Text>
    </View>
  </View>
);

export default function AdsFeed() {
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
    
      <View style={{padding:10,borderColor:'#ddd',borderWidth:1,borderRadius:10}}>
        <Text style={{fontWeight:'600'}}>Upcoming Election Date: <Text>18th Feburuary 2023</Text></Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
