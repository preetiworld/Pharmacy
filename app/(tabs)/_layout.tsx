import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "index",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="healthcare"
        options={{
          title: "healthcare",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="offers"
        options={{
          title: "offers",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="percent" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="lab"
        options={{
          title: "lab",
          tabBarIcon: ({ color }) => (
            <Entypo name="lab-flask" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="contacts" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
