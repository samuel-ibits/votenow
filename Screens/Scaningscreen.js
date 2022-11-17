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

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.front} focusDepth={1} ratio='1:1'>
        <View style={styles.buttonContainer}></View>
      </Camera>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="camera-outline" size={31} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
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
