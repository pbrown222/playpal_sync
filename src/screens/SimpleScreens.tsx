import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const createScreen = (title: string, color: string) => () => (
  <View style={styles.container}>
    <LinearGradient
      colors={["#15BDFB", color]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>✅ Screen is working</Text>
      </View>
    </LinearGradient>
  </View>
);

export const Home = createScreen("Home", "#8DDE77");
export const Venues = createScreen("Venues", "#FF8C00");
export const Gear = createScreen("Gear", "#98DC86");
export const Chat = createScreen("Chat", "#474B69");
export const EventDetail = createScreen("Event Detail", "#B0B1B8");
export const EventCreate = createScreen("Create Event", "#F4F6F0");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  message: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 10,
  },
});
