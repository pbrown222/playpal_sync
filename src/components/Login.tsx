import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Box from "./Box";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { width: screenWidth } = Dimensions.get("window");

  // Responsive text sizing
  const getResponsiveTextSize = () => {
    if (screenWidth >= 992) return 16; // xl
    if (screenWidth >= 640) return 15; // lg
    if (screenWidth >= 480) return 14; // md
    if (screenWidth >= 375) return 13; // sm
    return 12; // xs
  };

  const getButtonTextSize = () => {
    if (screenWidth >= 992) return 18; // xl
    if (screenWidth >= 640) return 17; // lg
    if (screenWidth >= 480) return 16; // md
    if (screenWidth >= 375) return 15; // sm
    return 14; // xs
  };

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });
    // Add login logic here
  };

  return (
    <Box 
      style={styles.container}
      title="Welcome Back"
      subtitle="Sign in to continue"
    >
      <View style={styles.content}>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { fontSize: getResponsiveTextSize() }]}>
              Email
            </Text>
            <TextInput
              style={[styles.input, { fontSize: getResponsiveTextSize() }]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={colors.playpal["inactive-gray"]}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { fontSize: getResponsiveTextSize() }]}>
              Password
            </Text>
            <TextInput
              style={[styles.input, { fontSize: getResponsiveTextSize() }]}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor={colors.playpal["inactive-gray"]}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={[styles.loginButtonText, { fontSize: getButtonTextSize() }]}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={[styles.forgotPasswordText, { fontSize: getResponsiveTextSize() - 1 }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing[4], // mx-4
    marginVertical: spacing[8], // my-8
  },
  content: {
    alignItems: "center",
  },
  form: {
    width: "100%",
    gap: spacing[4],
  },
  inputGroup: {
    gap: spacing[2],
  },
  label: {
    color: colors.playpal.gray,
    fontWeight: "600" as const,
    fontFamily: typography.fontFamilies.bold,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.playpal["inactive-gray"],
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: colors.playpal.white,
    color: colors.playpal.gray,
    fontFamily: typography.fontFamilies.regular,
  },
  loginButton: {
    backgroundColor: colors.playpal.blue,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[6],
    alignItems: "center",
    marginTop: spacing[2],
  },
  loginButtonText: {
    color: colors.playpal.white,
    fontWeight: "700" as const,
    fontFamily: typography.fontFamilies.bold,
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: spacing[2],
  },
  forgotPasswordText: {
    color: colors.playpal.blue,
    fontFamily: typography.fontFamilies.regular,
  },
});

export default Login; 