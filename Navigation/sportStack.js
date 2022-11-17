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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sport from "../Screens/StatsChart/dirSports";
import Pro from "../Screens/StatsChart/pro";
import President from "../Screens/StatsChart/SUGpresident";
import Stat from "../Screens/statpage";
const Stack = createNativeStackNavigator();

function App({ route: { params } }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="sport">
        

        <Stack.Screen
          name="sport"
          component={Sport}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="statpage"
          component={Stat}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
