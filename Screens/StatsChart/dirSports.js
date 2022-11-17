import React from "react";
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
import { LineChart } from "react-native-chart-kit";
const data = {
  labels: ["John Doe", "John Doe", "John doe",'john Doe'],
  datasets: [
    {
      data: [20, 45, 10, 199],
      color: () => `#027314`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Director of sports"], // optional
};

const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const chartConfig = {
  backgroundGradientFrom: "#333",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0.5,
  color: () => `#027314`,
  strokeWidth: 5,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};
export default function Substat({ navigation: { navigate } }) {
  return (
    <View style={{ justifyContent: "center", flex: 1,marginHorizontal:10 }}>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18 }}>Director of sports</Text>

        <Text style={{ fontWeight: "600", fontSize: 14, color: "#777" }}>
          Ongoing
        </Text>
      </View>

      <Text style={{ fontSize: 16, marginVertical: 5 }}>
        Candidates: <Text style={{ fontWeight: "600" }}>6</Text>
      </Text>
      <Text style={{ fontSize: 16, marginVertical: 5 }}>
        Levels: <Text style={{ fontWeight: "600" }}>2</Text>
      </Text>
      
      <TouchableOpacity onPress={() => navigate("statpage")}>
      <LineChart
        data={data}
        width={windowWidth}
        height={windowHeight / 2}
        chartConfig={chartConfig}
      />
      </TouchableOpacity>
    </View>
  );
}
