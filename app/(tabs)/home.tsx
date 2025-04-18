

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign"; // Cross icon
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Camera icon
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
// import React from "react";

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

const Home = () => {
  const [image, setImage] = useState<string | null>(null);

  // Function to hide the image
  const hideImage = () => {
    setImage(null);
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.text}>
          <View style={styles.container}>
            <View style={styles.text1}>
              <View style={styles.innerContainer1}>
                <Text style={styles.innerText1}>Join</Text>
              </View>
              <View style={styles.innerContainer2}>
                <Text style={styles.innerText2}>+ Plus</Text>
              </View>
            </View>

            <View style={styles.container1}>
              <View style={styles.container2}>
                <View style={styles.container22}>
                  <Entypo name="wallet" size={26} color=" #1a2436" />
                </View>

                <View style={styles.container3}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    $
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.container4}>
            <View style={styles.container5}>
              <View style={styles.container55}>
                <Entypo name="magnifying-glass" size={24} color="grey" />
              </View>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Search for Medicines/Lab Tests/Health........."
            />
          </View>

          <View style={styles.container6}>
            <View style={styles.container61}>
              <Text style={styles.container611}>Enjoy 24% Savings</Text>
            </View>

            <View style={styles.container62}>
              <Text style={styles.container621}>On Medicine Orders</Text>
            </View>

            <View style={styles.container63}>
              <View style={styles.container631}>
                <Text style={styles.container6311}>Code:PHARMA</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container70}>
          <View style={styles.container71}>
            <View style={styles.container711}>
              <View style={styles.container712}>
                <View style={styles.container7122}>
                  <Text
                    style={{
                      fontSize: 18,
                    }}
                  >
                    Order{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                    }}
                  >
                    Medicinies
                  </Text>
                </View>
                <View style={styles.container7123}>
                  <FontAwesome5 name="capsules" size={40} color="orange" />
                </View>
              </View>
              <View style={styles.container7124}>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    marginTop: 5,
                    color: "white",
                  }}
                >
                  upto 25 percent *off
                </Text>
              </View>
            </View>
            <View style={styles.container80}>
              <View style={styles.container712}>
                <View style={styles.container7122}>
                  <Text
                    style={{
                      fontSize: 18,
                    }}
                  >
                    Book{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                    }}
                  >
                    Lab Test
                  </Text>
                </View>
                <View style={styles.container7123}>
                  <Fontisto name="injection-syringe" size={38} color="orange" />
                </View>
              </View>
              <View style={styles.container7124}>
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    marginTop: 5,
                    color: "white",
                  }}
                >
                  upto 25 percent *off
                </Text>
              </View>

              <View style={styles.sharecont}>
                <Text>You can share by </Text>
              </View>
              <View style={styles.whatcontainer}>
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

                <TouchableOpacity
                  onPress={openDialer}
                  style={styles.callButton}
                >
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
              {image && (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: image }} style={styles.image} />
                  <TouchableOpacity
                    onPress={hideImage}
                    style={styles.crossButton}
                  >
                    <AntDesign name="closecircle" size={30} color="black" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#ffffff",
    width: "100%",
    height: 350,
    backgroundColor: "#1a2436",
    flex: 1,
  },
  text1: {
    borderWidth: 5,
    width: 180,
    marginLeft: 13,
    borderColor: "purple",
    flexDirection: "row",
    marginTop: 20,
    borderRadius: 10,
  },
  innerContainer1: {
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer2: {
    height: 40,
    width: 100,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  innerText1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  innerText2: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#e3900b",
  },
  container: {
    flexDirection: "row",
  },
  container1: {
    columnGap: 15,
    marginLeft: 80,
    flexDirection: "row",
  },
  container2: {
    width: 70,
    height: 32,
    backgroundColor: "#20857c",

    marginTop: 27,
    borderRadius: 5,
    flexDirection: "row",
  },

  container22: {
    marginTop: 2,
  },
  container3: {
    width: 25,
    height: 25,
    marginLeft: 7,
    marginTop: 3,
    backgroundColor: "#20857c",
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
  container6: {
    height: 140,
    width: 320,
    backgroundColor: "#314573",
    marginTop: 20,
    marginLeft: 19,
  },
  container61: {
    height: 40,
    width: 300,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  container62: {
    height: 40,
    width: 350,
    textAlign: "center",
    marginTop: 10,
    borderRadius: 80,
  },
  container63: {
    height: 40,
    width: 330,
    marginLeft: 10,
  },
  container631: {
    height: 20,
    width: 180,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  container621: {
    marginLeft: 20,
    color: "white",
    fontSize: 20,
  },
  container6311: {
    color: "black",
    backgroundColor: "white",
    fontSize: 15,
  },
  container611: {
    color: "white",
    fontSize: 25,
  },

  container70: {
    width: 370,
    height: 300,
    backgroundColor: "#1a2436",
  },

  container71: {
    width: "97%",
    height: 1350,
    marginTop: 7,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  container711: {
    width: 140,
    height: 100,
    backgroundColor: "#f5f7f7",

    marginLeft: 20,
    marginTop: 30,
  },

  container712: {
    flexDirection: "row",
  },

  container7122: {
    marginTop: 20,
    marginLeft: 8,
  },

  container7123: {
    marginTop: 30,
    marginLeft: 8,
  },

  container7124: {
    backgroundColor: "green",
    width: 140,
    height: 30,
  },

  container80: {
    width: 140,
    height: 100,
    backgroundColor: "#f5f7f7",
    marginLeft: 20,
    marginTop: 30,
  },

  whatsappButton: {
    backgroundColor: "#f5f7f7",
    paddingTop: 5,
    paddingLeft: 5,
    width: 100,
    flexDirection: "row",
  },

  whatcontainer: {
    marginLeft: -160,
    marginTop: 20,
    flexDirection: "row",
  },
  callButton: {
    backgroundColor: "#f5f7f7",
    paddingTop: 5,
    paddingLeft: 5,
    width: 100,
    flexDirection: "row",
  },

  cameraButton: {
    backgroundColor: "#f5f7f7",
    paddingTop: 5,

    width: 110,
    flexDirection: "row",
  },

  crossButton: {
    position: "absolute",
    right: 80,
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

  sharecont: {
    backgroundColor: "#f5f7f7",
    width: 200,
    paddingLeft: 50,
    height: 30,
    marginTop: 20,
    marginLeft: -100,
    paddingTop: 5,
  },
});

export default Home;
