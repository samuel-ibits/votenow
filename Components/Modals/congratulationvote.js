import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import BigButton1 from "../Buttons/BigBtn";
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
  return (
    <View style={styles.container}>
    <View style={{justifyContent:'space-around',alignItems:'center'}}>
    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#027314',width:150,height:150,borderRadius:150/2}}>
    <Octicons name="thumbsup" size={60} color="#fff" />
    </View>


<Text style={{fontWeight:'700',fontSize:23}}>Congratualations!</Text>
<Text style={{fontWeight:'400',fontSize:16,color:TextGrey}}>Your vote was successful</Text>
    </View>


    <BigButton1 title="Go  back home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:windowHeight,
    paddingVertical:100,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    position:'absolute',
    backgroundColor:Surface2,
    
  },
  camera: {
    width: windowWidth / 1.1,
    height: windowHeight / 2.3,
    elevation: 3,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: Primary,
    padding: 5,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
