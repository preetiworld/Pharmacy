import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome"; // WhatsApp icon
import Ionicons from "@expo/vector-icons/Ionicons"; // Call icon
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Camera icon
import AntDesign from "@expo/vector-icons/AntDesign"; // Cross icon
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

// Function to Open WhatsApp
const openWhatsApp = () => {
  const phoneNumber = "918109131735"; // Replace with your WhatsApp number
  const url = `whatsapp://send?phone=${phoneNumber}`;

  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        alert("WhatsApp is not installed on your device.");
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

// Function to Open Dialer
const openDialer = () => {
  const phoneNumber = "8109131735";
  const url = `tel:${phoneNumber}`;

  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        alert("Calling feature is not supported on this device.");
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

// Function to Open Camera
const openCamera = async (
  setImage: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access camera is required!");
    return;
  }

  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

const Lab = () => {
  const [image, setImage] = useState<string | null>(null);

  // Function to hide the image
  const hideImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container00}>
        {/* Search Bar Section */}
        <View style={styles.container4}>
          <View style={styles.container5}>
            <View style={styles.container55}>
              <Entypo name="magnifying-glass" size={24} color="grey" />
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Search for tests & packages"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.sharecont}>
          <Text>You can share by </Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          {/* WhatsApp Button */}
          <TouchableOpacity
            onPress={openWhatsApp}
            style={styles.whatsappButton}
          >
            {/* <Text>whatsapp</Text> */}
            <FontAwesome name="whatsapp" size={25} color="black" />
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              whatsapp
            </Text>
          </TouchableOpacity>

          {/* Call Button */}
          <TouchableOpacity onPress={openDialer} style={styles.callButton}>
            <Ionicons name="call" size={30} color="black" />
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              call
            </Text>
          </TouchableOpacity>

          {/* Camera Button */}
          <TouchableOpacity
            onPress={() => openCamera(setImage)}
            style={styles.cameraButton}
          >
            <MaterialIcons name="photo-camera" size={30} color="black" />
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              Prescrption
            </Text>
          </TouchableOpacity>
        </View>

        {/* Display Captured Image with Cross Icon */}
        {image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity onPress={hideImage} style={styles.crossButton}>
              <AntDesign name="closecircle" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.banner00}>
          <Text>Tax-saving made easy !</Text>
        </View>
        <View style={styles.banner01}>
          <View style={styles.banner02}>
            <View style={styles.banner03}>
              <Text>Book a health chcekup &</Text>
              <Text>CLAIM TAX DEDUCATIONS UP TO </Text>
              <Text> $5000</Text>
            </View>

            <View style={styles.banner04}>
              <Text>SAVE TAX</Text>
            </View>
          </View>

          <View style={styles.banner05}>
            <FontAwesome5 name="book-medical" size={45} color="green" />
          </View>
        </View>

        <View style={styles.container90}>
          <View style={styles.container91}>
            <View style={styles.container92}></View>
            <View style={styles.container93}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Lab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container00: {
    flex: 1,
    backgroundColor: "#f5f7f7",
  },
  container4: {
    flexDirection: "row",
  },
  container5: {
    height: 70,
    width: 30,
    backgroundColor: "white",
    marginTop: 30,
    marginLeft: 13,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  container55: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  input: {
    height: 70,
    width: 300,
    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  whatsappButton: {
    backgroundColor: "#c1cfd6",
    paddingTop: 5,
    paddingLeft: 5,
    width: 100,
    flexDirection: "row",
  },
  callButton: {
    backgroundColor: "#c1cfd6",
    paddingTop: 5,
    paddingLeft: 5,
    width: 100,
    flexDirection: "row",
  },
  cameraButton: {
    backgroundColor: "#c1cfd6",
    paddingTop: 5,
    width: 110,
    flexDirection: "row",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  crossButton: {
    position: "absolute",
    right: 80,
  },

  sharecont: {
    backgroundColor: "#c1cfd6",
    width: 200,
    paddingLeft: 50,
    height: 30,
    marginTop: 20,
    marginLeft: 75,
    paddingTop: 5,
  },

  banner00: {
    backgroundColor: "#c1cfd6",
    width: 200,
    paddingLeft: 20,
    height: 30,
    marginTop: 30,
    paddingTop: 5,
  },

  banner01: {
    width: 320,
    height: 100,
    backgroundColor: "#d69cd4",
    marginLeft: 18,
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: "row",
  },

  banner02: {},

  banner03: {},

  banner04: {
    height: 20,
    width: 100,
    backgroundColor: "orange",
    paddingLeft: 18,
    marginLeft: 60,
  },

  banner05: {
    marginLeft: 20,
    marginTop: 10,
  },

  container90: {},
  container91: {},
  container92: {},
  container93: {},
  container94: {},
  container95: {},
  container96: {},
  container961: {},
  container962: {},
  container963: {},
  container964: {},
  container73: {},
});
