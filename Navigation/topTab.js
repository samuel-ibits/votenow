import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import President from "./presidentStack";
import Pro from "../Navigation/proStack";
import Sport from "../Navigation/sportStack";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function MyTabs() {
  return (
    <View style={{ flex: 1 }}>
     <View style={{alignItems:'center'}}>
     <TouchableOpacity>
        <View
          style={{ width: windowWidth - 20, marginBottom: 30, marginTop: 10 }}
        >
          <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
             Election Stastics
          </Text>
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
          marginVertical:10
        }}
      >
        <Ionicons name="search" size={18} color="#575757" />
        <TextInput
          placeholder="Search category"
          placeholderTextColor={TextGrey}
          style={{ width: "90%", padding: 5, fontSize: 16 }}
        />
      </View>
     </View>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Presidential"
          screenOptions={{
            tabBarActiveTintColor: "#027314",
            tabBarLabelStyle: { fontSize: 13, fontWeight: "600" },
            tabBarStyle: { backgroundColor: "#F8F8F8" },
            tabBarBounces: true,
          }}
        >
          <Tab.Screen
            name="Presidential"
            component={President}
            options={{ tabBarLabel: "Presidential"}}
          />

          <Tab.Screen
            name="Pro"
            component={Pro}
            options={{ tabBarLabel: "Pro" }}
          />

          <Tab.Screen
            name="Sport"
            component={Sport}
            options={{ tabBarLabel: "Sport" }}
          />


        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default MyTabs;
