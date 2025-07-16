import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { useAppFonts } from "./src/styles/fonts";

const queryClient = new QueryClient();

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return <View />; // Return empty view while fonts load
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <AppNavigator />
    </QueryClientProvider>
  );
}
