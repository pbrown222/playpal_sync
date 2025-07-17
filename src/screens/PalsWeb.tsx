import React from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PalsWeb: React.FC = () => {
  return (
    <View style={styles.container}>
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
                <Text style={styles.cardTitle}>Create Event</Text>
                <Text style={styles.cardSubtitle}>Start a new game</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Join Game</Text>
                <Text style={styles.cardSubtitle}>4 spots left</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Find Venue</Text>
                <Text style={styles.cardSubtitle}>Near you</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Chat</Text>
                <Text style={styles.cardSubtitle}>Team messages</Text>
              </View>
            </View>

            <Text style={styles.message}>
              ✅ React Native Web App Working in Builder.io
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: Platform.OS === "web" ? "100vh" : undefined,
  },
  gradient: {
    flex: 1,
    width: "100%",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: Platform.OS === "web" ? 60 : 40,
    paddingBottom: Platform.OS === "web" ? 60 : 40,
  },
  title: {
    color: "white",
    fontSize: Platform.OS === "web" ? 48 : 36,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontFamily:
      Platform.OS === "web"
        ? "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        : undefined,
  },
  subtitle: {
    color: "white",
    fontSize: Platform.OS === "web" ? 24 : 20,
    marginBottom: 40,
    textAlign: "center",
    fontFamily:
      Platform.OS === "web"
        ? "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        : undefined,
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    marginBottom: 40,
    maxWidth: 600,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 15,
    minWidth: Platform.OS === "web" ? 140 : 120,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    color: "#474B69",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    fontFamily:
      Platform.OS === "web"
        ? "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        : undefined,
  },
  cardSubtitle: {
    color: "#B0B1B8",
    fontSize: 14,
    textAlign: "center",
    fontFamily:
      Platform.OS === "web"
        ? "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        : undefined,
  },
  message: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 10,
    fontFamily:
      Platform.OS === "web"
        ? "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
        : undefined,
  },
});

export default PalsWeb;
