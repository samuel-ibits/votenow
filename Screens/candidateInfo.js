import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import BigButton1 from "../Components/Buttons/BigBtn";
import Ionicons from "@expo/vector-icons/Ionicons";
import Congrate from "../Components/Modals/congratulationvote";
const Primary = "#027314";
const Secondary = "#C9D7CB";
const Surface = "F8F8F8";
const Surface2 = "#FFFFFF";
const TextGrey = "#575757";
const TextBlack = "#001403";
const Error = "B00020";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [lenthOfText, setLengthOfText] = useState(15);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const handleButtonClick = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 500);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#027314"
            barStyle={"light-content"}
            hidden={false}
          />

          <View style={{ width: windowWidth - 30 }}>
            <Image
              style={{
                width: "100%",
                height: windowHeight / 3,
                borderRadius: 10,
              }}
              source={require("../assets/dp2.jpg")}
            />
            <Text
              style={{ fontWeight: "600", fontSize: 22, marginVertical: 10 }}
              numberOfLines={1}
            >
              John Doe
            </Text>
            <Text
              style={{
                fontWeight: "500",
                color: TextGrey,
                fontSize: 18,
                marginBottom: 10,
              }}
              numberOfLines={1}
            >
              History and International Relations
            </Text>

            <Text
              numberOfLines={lenthOfText}
              style={{
                fontSize: 18,
                color: "#888",
                lineHeight: 23,
                marginVertical: 10,
              }}
            >
              I have always loved the sounds of a classroom. The quiet that
              sparks with possibility just before students shuffle in. The
              murmur of ideas bouncing back and forth as we explore the world
              together. The laughter and tiny moments of surprise you find in
              materialsmurmur of ideas bouncing back and forth as we explore the
              world together. The laughter and tiny moments of surprise you find
              in materials
            </Text>

            <BigButton1
              title="Confirm Candidate"
              functionHandle={handleButtonClick}
            />

            {isAlertVisible && <Congrate />}
          </View>
        </View>
      </ScrollView>
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
