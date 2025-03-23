import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image } from "expo-image";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const images = [
  require("../../assets/images/baaner1.jpg"),
  require("../../assets/images/baaner2.jpg"),
  require("../../assets/images/baaner3.jpg"),
  require("../../assets/images/baaner4.jpg"),
  require("../../assets/images/baaner5.jpg"),
];

const Healthcare = () => {
  return (
    <View style={styles.container00}>
      <View style={styles.container01}>
        <View style={styles.container02}>
          <View style={styles.container021}>
            <Text>Healthcare Products</Text>
          </View>
          <View style={styles.container022}>
            <Entypo name="wallet" size={26} color="#1a2436" />
            <Text>$100</Text>
          </View>
          <View style={styles.container023}>
            <AntDesign name="shoppingcart" size={24} color="black" />
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
            placeholder="Search for tests & packages"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.banner00}>
          <Text>Tax-saving made easy !</Text>
        </View>

        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
        />
      </View>
    </View>
  );
};

export default Healthcare;

const styles = StyleSheet.create({
  container00: {
    flex: 1,
  },
  container01: {
    flex: 1,
    backgroundColor: "white",
  },
  container02: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 25,
  },
  container021: {},
  container022: {
    flexDirection: "row",
    marginLeft: 70,
  },
  container023: {
    marginLeft: 40,
  },
  container4: {
    flexDirection: "row",
  },
  container5: {
    height: 70,
    width: 30,
    backgroundColor: "#ded7c3",
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
    backgroundColor: "#ded7c3",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 30,
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
    borderRadius: 15,
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
  image: {
    marginTop: 30,
    width: 400,
    height: 200,
    resizeMode: "cover",
    marginHorizontal: 5,
  },
});
