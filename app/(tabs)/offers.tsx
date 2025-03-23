import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const Offers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container00}>
        <View style={styles.container01}>
          <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20 }}>
            Offers
          </Text>
          <View style={styles.container011}>
            <Octicons name="search" size={24} color="black" />
            <AntDesign name="shoppingcart" size={24} color="black" />
          </View>
        </View>

        {/* Horizontal ScrollView for box1 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
            <View style={styles.container2}>
              <Text>All</Text>
            </View>
            <View style={styles.container21}>
              <Text>Payment</Text>
            </View>
            <View style={styles.container22}>
              <Text>Medicine</Text>
            </View>
            <View style={styles.container23}>
              <Text>Diagnostic</Text>
            </View>
            <View style={styles.container24}>
              <Text>Healthcare</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.container3}>
          <View style={styles.container31}>
            <Text
              style={{
                paddingLeft: 17,
                paddingTop: 15,
                fontSize: 12,
                color: "white",
              }}
            >
              SAVE
            </Text>
            <Text
              style={{
                paddingLeft: 15,
                fontSize: 28,
                color: "white",
                // paddingTop: 15,
              }}
            >
              24%
            </Text>
          </View>
          <View style={styles.container32}>
            <View style={styles.container33}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 10,
                }}
              >
                {" "}
                24% OFF on healthcare essentials
              </Text>
            </View>

            <View style={styles.container34}>
              <Text>Coupan applicable on order</Text>
              <Text>above Rs. 1000</Text>
            </View>
            <View style={styles.container35}>
              <Text
                style={{
                  // marginLeft: 120,
                  fontSize: 18,
                }}
              >
                Code : PHARMA24
              </Text>
              <Text
                style={{
                  marginLeft: 100,
                  fontSize: 18,
                }}
              >
                COPY CODE
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.container4}>
          <View style={styles.container41}>
            <Text
              style={{
                paddingLeft: 17,
                paddingTop: 15,
                fontSize: 12,
                color: "white",
              }}
            >
              SAVE
            </Text>
            <Text
              style={{
                paddingLeft: 15,
                fontSize: 28,
                color: "white",
                // paddingTop: 15,
              }}
            >
              24%
            </Text>
          </View>
          <View style={styles.container42}>
            <View style={styles.container43}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 10,
                }}
              >
                {" "}
                24% OFF on healthcare essentials
              </Text>
            </View>

            <View style={styles.container44}>
              <Text>Coupan applicable on order</Text>
              <Text>above Rs. 1000</Text>
            </View>
            <View style={styles.container35}>
              <Text
                style={{
                  // marginLeft: 120,
                  fontSize: 18,
                }}
              >
                Code : PHARMA24
              </Text>
              <Text
                style={{
                  marginLeft: 100,
                  fontSize: 18,
                }}
              >
                COPY CODE
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container4}>
          <View style={styles.container41}>
            <Text
              style={{
                paddingLeft: 17,
                paddingTop: 15,
                fontSize: 12,
                color: "white",
              }}
            >
              SAVE
            </Text>
            <Text
              style={{
                paddingLeft: 15,
                fontSize: 28,
                color: "white",
                // paddingTop: 15,
              }}
            >
              24%
            </Text>
          </View>
          <View style={styles.container42}>
            <View style={styles.container43}>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 10,
                }}
              >
                {" "}
                24% OFF on healthcare essentials
              </Text>
            </View>

            <View style={styles.container44}>
              <Text>Coupan applicable on order</Text>
              <Text>above Rs. 1000</Text>
            </View>
            <View style={styles.container35}>
              <Text
                style={{
                  // marginLeft: 120,
                  fontSize: 18,
                }}
              >
                Code : PHARMA24
              </Text>
              <Text
                style={{
                  marginLeft: 100,
                  fontSize: 18,
                }}
              >
                COPY CODE
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container00: {
    flex: 1,
    backgroundColor: "#f5f7f7",
  },
  container01: {
    flexDirection: "row",
  },
  container011: {
    flexDirection: "row",
    marginLeft: 194,
    gap: 20,
    marginTop: 20,
  },
  box1: {
    flexDirection: "row",
    marginTop: 25,
  },
  container2: {
    height: 30,
    width: 100,
    backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  container21: {
    height: 30,
    width: 100,
    backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  container22: {
    height: 30,
    width: 100,
    backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  container23: {
    height: 30,
    width: 100,
    backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  container24: {
    height: 30,
    width: 100,
    backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  container3: {
    height: 150,
    width: 400,
    backgroundColor: "white",
    marginBottom: 30,
    flexDirection: "row",
  },

  container31: {
    height: 70,
    width: 70,
    backgroundColor: "#1b6143",
    marginLeft: 20,
    marginTop: 20,
  },

  container32: {},

  container33: {},

  container34: {
    marginTop: 15,
    marginLeft: 15,
  },

  container35: {
    flexDirection: "row",
    backgroundColor: "#b6decd",
    width: 800,
    marginTop: 20,
    marginLeft: -80,
  },

  container4: {
    height: 150,
    width: 400,
    backgroundColor: "white",
    marginBottom: 20,
    flexDirection: "row",
  },

  container41: {
    height: 70,
    width: 70,
    backgroundColor: "#1b6143",
    marginLeft: 20,
    marginTop: 20,
  },

  container42: {},

  container43: {},

  container44: {
    marginTop: 15,
    marginLeft: 15,
  },

  container45: {
    flexDirection: "row",
    backgroundColor: "yellow",
    width: 800,
    marginTop: 20,
    marginLeft: -80,
  },
});
