import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View, Text, StyleSheet, Platform } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { useAppFonts } from "./src/styles/fonts";

const queryClient = new QueryClient();

export default function App() {
  console.log("PlayPal App starting...");

  const fontsLoaded = useAppFonts();

  // For web, skip font loading to avoid white screen
  const shouldShowApp = Platform.OS === "web" ? true : fontsLoaded;

  if (!shouldShowApp) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </View>
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
