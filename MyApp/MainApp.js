import React, { useContext } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "./screens/chatsScreen";
import UsersScreen from "./screens/usersScreen";
import ProfileScreen from "./screens/profileScreen";
import ChatViewScreen from "./screens/chatViewScreen";
import LoginScreen from "./screens/LoginScreen";
import RegScreen from "./screens/RegScreen";
import { Ionicons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import { UserContext } from "./context/userData";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const API_URL = "http://172.26.176.1:3000/";
export const WS_URL = "ws://172.26.176.1:3000/";

export default function MainApp() {
  const { userData, isLogged } = useContext(UserContext);

  const Tabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Чаты") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Пользователи") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Профиль") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Авторизация") {
            iconName = focused ? "log-in" : "log-in-outline";
          } else if (route.name === "Регистрация") {
            iconName = focused ? "person-add" : "person-add-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {isLogged ? (
        <>
          <Tab.Screen name="Чаты" component={ChatsScreen} />
          <Tab.Screen name="Пользователи" component={UsersScreen} />
          <Tab.Screen name="Профиль" component={ProfileScreen} />
        </>
      ) : (
        <>
          <Tab.Screen name="Авторизация" component={LoginScreen} />
          <Tab.Screen name="Регистрация" component={RegScreen} />
        </>
      )}
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatView"
          component={ChatViewScreen}
          options={({ route }) => ({ title: route.params?.chatName || "Чат" })}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
