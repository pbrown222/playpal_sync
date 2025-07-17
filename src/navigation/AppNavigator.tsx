import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigation from "../components/BottomNavigation";

// Import screens
import PalsSimple from "../screens/PalsSimple";
import Home from "../screens/Home";
import Venues from "../screens/Venues";
import Gear from "../screens/Gear";
import Chat from "../screens/Chat";
import EventDetail from "../screens/EventDetail";
import EventCreate from "../screens/EventCreate";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Pals"
    tabBar={(props) => <BottomNavigation {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="Pals" component={PalsSimple} />
    <Tab.Screen name="Venues" component={Venues} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Gear" component={Gear} />
    <Tab.Screen name="Chat" component={Chat} />
  </Tab.Navigator>
);

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="EventCreate" component={EventCreate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
