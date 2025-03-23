// import React from "react";
// import { View, Text, Button } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";

// const ProfileScreen = () => {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem("userToken");
//     router.replace("/about/signup");
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 20, marginBottom: 20 }}>👤 Profile Screen</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// export default ProfileScreen;

import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Account = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    router.replace("/about/signup");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.container00}>
          <View style={styles.Edit1}>
            <View style={styles.Edit2}>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {" "}
                Preeti mishra
              </Text>
              <Text
                style={{
                  marginLeft: 145,
                  color: "#3eb59d",
                }}
              >
                Edit
              </Text>
            </View>

            <View style={styles.Edit3}>
              <Text
                style={{
                  marginLeft: 40,
                  marginTop: 5,
                }}
              >
                {" "}
                <FontAwesome name="circle" size={5} color="black" />
                8109131735
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 3,
                }}
              >
                <FontAwesome name="circle" size={5} color="black" />
                preetiworld7@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.Profile}>
            <View style={styles.Profile1}>
              <View style={styles.Profile11}>
                <FontAwesome name="plus" size={24} color="yellow" />
              </View>

              <View style={styles.Profile12}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "yellow",
                  }}
                >
                  Plus
                </Text>
              </View>
            </View>
            <View style={styles.Profile2}>
              <Text
                style={{
                  color: "white",
                }}
              >
                Save flat 5% extra on medicines & enjoy
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                {" "}
                Free delivery with Plus membership
              </Text>
            </View>
            <View style={styles.arrow11}>
              <SimpleLineIcons name="arrow-right" size={16} color="white" />
            </View>
          </View>
          <View style={styles.separator1} />

          <View style={styles.Order}>
            <FontAwesome5 name="shopping-bag" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Order
            </Text>
            <View style={styles.arrow}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Reports}>
            <Ionicons name="document-text-sharp" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Reports
            </Text>
            <View style={styles.arrow1}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Prescrptions}>
            <Entypo name="text-document-inverted" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Prescriptions
            </Text>
            <View style={styles.arrow2}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Later}>
            <MaterialIcons name="watch-later" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Saved for Later
            </Text>
            <View style={styles.arrow3}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Notifications}>
            <Ionicons name="notifications" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Notifications
            </Text>
            <View style={styles.arrow4}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Address}>
            <Entypo name="location" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Manage Address
            </Text>
            <View style={styles.arrow5}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
            <View style={styles.separator} />
          </View>
          <View style={styles.separator} />
          <View style={styles.Wallet}>
            <FontAwesome5 name="wallet" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Wallet
            </Text>
            <View style={styles.arrow6}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Help}>
            <FontAwesome5 name="headset" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Need Help
            </Text>
            <View style={styles.arrow7}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Refund}>
            <FontAwesome name="bank" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              For Refund Preferences
            </Text>
            <View style={styles.arrow8}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Gift}>
            <AntDesign name="gift" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Refer and Earn
            </Text>
            <View style={styles.arrow9}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.Legal}>
            <Ionicons name="documents" size={24} color="#3eb59d" />
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Legal
            </Text>
            <View style={styles.arrow10}>
              <SimpleLineIcons name="arrow-right" size={16} color="#3eb59d" />
            </View>
          </View>
          <View style={styles.separator} />
        </View>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container00: {
    flex: 1,
    backgroundColor: "white",
  },

  arrow: {
    marginLeft: 200,
    marginTop: 8,
  },
  arrow1: {
    marginLeft: 180,
    marginTop: 8,
  },
  arrow2: {
    marginLeft: 145,
    marginTop: 8,
  },
  arrow3: {
    marginLeft: 130,
    marginTop: 8,
  },

  arrow4: {
    marginLeft: 145,
    marginTop: 8,
  },

  arrow5: {
    marginLeft: 120,
    marginTop: 8,
  },

  arrow6: {
    marginLeft: 190,
    marginTop: 8,
  },

  arrow7: {
    marginLeft: 160,
    marginTop: 8,
  },

  arrow8: {
    marginLeft: 68,
    marginTop: 8,
  },

  arrow9: {
    marginLeft: 130,
    marginTop: 8,
  },

  arrow10: {
    marginLeft: 190,
    marginTop: 8,
  },

  arrow11: {
    marginLeft: 15,
    marginTop: 3,
  },
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  separator1: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    // marginVertical: 10,
  },
  Order: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Reports: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },

  Address: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Prescrptions: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Later: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Notifications: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Wallet: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Help: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Refund: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Gift: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Legal: {
    width: 400,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    gap: 20,
  },
  Profile: {
    width: 400,
    height: 60,
    flexDirection: "row",

    backgroundColor: "#6f2be3",
  },

  Profile1: {
    marginLeft: 20,
    marginTop: -10,
  },

  Profile2: {
    // marginTop: 18,
    marginLeft: 20,
  },

  Profile11: {
    marginTop: 10,
  },

  Profile12: {
    marginLeft: -8,
  },

  Edit1: {
    height: 80,
  },
  Edit2: {
    flexDirection: "row",
    marginLeft: 40,
    marginTop: 20,
  },
  Edit3: {
    flexDirection: "row",
  },
});
