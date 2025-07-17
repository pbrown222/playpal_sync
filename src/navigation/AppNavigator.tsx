import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import screens
import PalsSimple from "../screens/PalsSimple";
import {
  Home,
  Venues,
  Gear,
  Chat,
  EventDetail,
  EventCreate,
} from "../screens/SimpleScreens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => (
  <Tab.Navigator initialRouteName="Pals" screenOptions={{ headerShown: false }}>
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
