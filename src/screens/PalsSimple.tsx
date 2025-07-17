import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PalsSimple: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#15BDFB", "#8DDE77"]} style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.title}>Pals Screen</Text>
          <Text style={styles.subtitle}>Welcome to PlayPal!</Text>
          <Text style={styles.message}>✅ Navigation is working</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

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
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
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

export default PalsSimple;
