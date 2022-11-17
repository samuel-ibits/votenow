import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Input({ placeholder }) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={{
          borderWidth: 1,
          width: windowWidth - 30,
          borderColor: Secondary,
          padding: 5,
          borderRadius: 5,
          marginVertical: 10,
        }}
      />
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
