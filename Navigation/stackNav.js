import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Candidates from "../Screens/candidates";
import VoteScreen from "../Screens/voteScreen";
import Candidateinfo from "../Screens/candidateInfo";
import Accred from "../Screens/accrediation";
import ScanPage from "../Screens/Scaningscreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="acrred">
        <Stack.Screen
          name="acrred"
          component={Accred}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="vote"
          component={VoteScreen}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="scan"
          component={ScanPage}
          options={{
            headerBackVisible: true,
          }}
        />

        <Stack.Screen
          name="cart"
          component={Candidates}
          options={{ title: "Candidates" }}
        />

        <Stack.Screen
          name="cartin"
          component={Candidateinfo}
          options={{ title: "Candidates info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
