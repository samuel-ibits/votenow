import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BigButton({ title }) {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#929292',
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 12,
          width: windowWidth - 30,
          elevation: 5,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: Surface2, fontSize: 16, fontWeight: "500" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
