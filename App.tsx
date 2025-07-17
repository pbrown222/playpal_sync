import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { useAppFonts } from "./src/styles/fonts";

const queryClient = new QueryClient();

export default function App() {
  const fontsLoaded = useAppFonts();

  console.log("Fonts loaded:", fontsLoaded);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <AppNavigator />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15BDFB",
  },
  loadingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
