import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import { NavigationContainer } from "@react-navigation/native";
import AdsFeed from "../Screens/adsFeed";
import VoteScreen from "../Navigation/stackNav";
import Statpage from "../Screens/statpage";
import StatTab from '../Navigation/topTab';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Ads"
        activeColor="#027314"
        barStyle={{ backgroundColor: "#F8F8F8" }}
      >
        <Tab.Screen
          name="Ads"
          component={AdsFeed}
          options={{
            tabBarLabel: "Ads",
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="Vote"
          component={VoteScreen}
          options={{
            tabBarLabel: "Vote",
            tabBarIcon: ({ color }) => (
              <Octicons name="thumbsup" color={color} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="Stat"
          component={StatTab}
          options={{
            tabBarLabel: "Stat",
            tabBarIcon: ({ color }) => (
              <Feather name="bar-chart" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
