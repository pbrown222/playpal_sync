import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar, ScaledSize, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BottomNavigation from "../components/BottomNavigation";
import { colors, typography, spacing, getGradientConfig } from "../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const Gear: React.FC = () => {
  const gradient = getGradientConfig();
  const [screen, setScreen] = useState<ScaledSize>(Dimensions.get("window"));
  const [contentHeight, setContentHeight] = useState(screen.height);
  const scrollY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => setScreen(window);
    const sub = Dimensions.addEventListener("change", onChange);
    return () => sub.remove();
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: screen.width,
          height: Math.max(contentHeight, screen.height),
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
            onContentSizeChange={(w, h) => setContentHeight(h)}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          >
            <View style={styles.wrapper}>
              <View style={styles.container}>
                <View style={{ marginBottom: spacing[8] }}>
                  <Text style={[styles.title, { textAlign: 'center', marginTop: spacing[8] }]}>Gear</Text>
                  <Text style={[styles.subtitle, { textAlign: 'center' }]}>Coming soon...</Text>
                </View>
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
  gradientBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.playpal.gray,
    marginBottom: 8,
    fontFamily: typography.fontFamilies.bold,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.playpal.gray,
    fontFamily: typography.fontFamilies.regular,
  },
});

export default Gear;
