import React from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  console.log("PlayPal App starting for Builder.io...");

  return (
    <View style={styles.appContainer}>
      <LinearGradient
        colors={["#15BDFB", "#8DDE77"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>PlayPal</Text>
            <Text style={styles.subtitle}>Find Your Sports Buddies</Text>

            <View style={styles.cardGrid}>
              <View style={styles.card}>
                <Text style={styles.cardIcon}>➕</Text>
                <Text style={styles.cardTitle}>Create Event</Text>
                <Text style={styles.cardSubtitle}>Start a new game</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardIcon}>🏃</Text>
                <Text style={styles.cardTitle}>Join Game</Text>
                <Text style={styles.cardSubtitle}>4 spots left</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardIcon}>📍</Text>
                <Text style={styles.cardTitle}>Find Venue</Text>
                <Text style={styles.cardSubtitle}>Near you</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardIcon}>💬</Text>
                <Text style={styles.cardTitle}>Chat</Text>
                <Text style={styles.cardSubtitle}>Team messages</Text>
              </View>
            </View>

            <View style={styles.statusCard}>
              <Text style={styles.statusText}>✅ React Native App</Text>
              <Text style={styles.statusText}>✅ Working in Builder.io</Text>
              <Text style={styles.statusText}>✅ Interactive & Responsive</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: Platform.OS === "web" ? "100vh" : undefined,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15BDFB",
    width: "100%",
    height: "100%",
    minHeight: Platform.OS === "web" ? "100vh" : undefined,
  },
  loadingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
