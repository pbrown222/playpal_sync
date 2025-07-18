import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, StatusBar, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "../components/Login";
import { colors, getGradientConfig } from "../styles/theme";

const LoginScreen: React.FC = () => {
  const gradient = getGradientConfig();
  const { width, height } = Dimensions.get("window");
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width,
          height: height,
          zIndex: 0,
          transform: [
            {
              translateY: Animated.multiply(scrollY, -1),
            },
          ],
        }}
        pointerEvents="none"
      >
        <LinearGradient
          colors={[colors.playpal.blue, colors.playpal.green]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{ flex: 1, width: "100%", height: "100%" }}
        />
      </Animated.View>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <View style={{ flex: 1, position: 'relative' }}>
          <Animated.ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
            overScrollMode="never"
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          >
            <View style={styles.wrapper}>
              <View style={styles.container}>
                <Login />
              </View>
            </View>
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    position: "relative",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default LoginScreen; 