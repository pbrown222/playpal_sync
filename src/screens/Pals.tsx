import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScaledSize,
  Animated,
} from "react-native";
import { SafeAreaView as SafeAreaViewRN } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PalCard from "../components/PalCard";
import SearchBar from "../components/SearchBar";
import CalendarBar from "../components/CalendarBar";
import { colors, spacing, breakpoints, getGradientConfig, typography } from "../styles/theme";

import { BuilderComponent, builder } from '@builder.io/react';

builder.init('YOUR_PUBLIC_API_KEY');

export default function AboutPage() {
  return (
    <div>
      <BuilderComponent model="page" />
    </div>
  );
}


const { width, height } = Dimensions.get("window");

const Pals: React.FC = () => {
  const navigation = useNavigation();
  const gradient = getGradientConfig();
  const [screen, setScreen] = useState<ScaledSize>(Dimensions.get("window"));
  const [containerWidth, setContainerWidth] = useState(screen.width);
  const [contentHeight, setContentHeight] = useState(screen.height);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => setScreen(window);
    const sub = Dimensions.addEventListener("change", onChange);
    return () => sub.remove();
  }, []);

  // Exact same data as React version
  const palCards = [
    { type: "create" as const },
    {
      type: "single" as const,
      status: "ready to play",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e9dcda3fb518cea3b862e63c69b83f6da12c8ab?width=113",
      ],
    },
    {
      type: "multiple" as const,
      status: "4 spots left",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/13dcb90a0c8afe3661d66ea01804cc81d219fe35?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aacbd93ad25b586d4302d25ab10093f10437cd7b?width=54",
      ],
    },
    {
      type: "multiple" as const,
      status: "3 spots left",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/13dcb90a0c8afe3661d66ea01804cc81d219fe35?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aacbd93ad25b586d4302d25ab10093f10437cd7b?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6feb7d7262a5256f4d4cf58a48ca5dc10610bd8a?width=54",
      ],
    },
    {
      type: "multiple" as const,
      status: "2 spots left",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/13dcb90a0c8afe3661d66ea01804cc81d219fe35?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aacbd93ad25b586d4302d25ab10093f10437cd7b?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6feb7d7262a5256f4d4cf58a48ca5dc10610bd8a?width=54",
      ],
    },
    {
      type: "multiple" as const,
      status: "3 spot left",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae3ed0ffa938891a307ba02687bef42f5fee9e1a?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa1a794d882f3b95bd2bd2be5930c185757968b0?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/11f52df1a10f6443bbd208617045f5d98ff2092d?width=54",
      ],
      additionalCount: 3,
    },
    {
      type: "multiple" as const,
      status: "1 spot left",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae3ed0ffa938891a307ba02687bef42f5fee9e1a?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa1a794d882f3b95bd2bd2be5930c185757968b0?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/11f52df1a10f6443bbd208617045f5d98ff2092d?width=54",
      ],
      additionalCount: 2,
    },
    ...Array.from({ length: 15 }, (_, i) => ({
      type: "multiple" as const,
      status: "1 spot left",
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ae3ed0ffa938891a307ba02687bef42f5fee9e1a?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa1a794d882f3b95bd2bd2be5930c185757968b0?width=54",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/11f52df1a10f6443bbd208617045f5d98ff2092d?width=54",
      ],
      additionalCount: i === 14 ? 22 : 2,
    })),
  ];

  // Responsive grid columns - exact matching React breakpoints
  const getGridColumns = () => {
    if (screen.width >= breakpoints.xl) return 5; // xl:grid-cols-5
    if (screen.width >= breakpoints.lg) return 4; // lg:grid-cols-4
    if (screen.width >= breakpoints.md) return 4; // md:grid-cols-4
    if (screen.width >= breakpoints.sm) return 3; // sm:grid-cols-3
    return 3; // grid-cols-3
  };

  const columns = getGridColumns();

  const handleCardPress = (card: any, index: number) => {
    if (card.type === "create") {
      navigation.navigate("EventCreate" as never);
    } else if (card.type === "multiple") {
      navigation.navigate("EventDetail" as never);
    }
    // Single cards don't navigate anywhere in React version
  };

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
      <SafeAreaViewRN style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <View style={{ flex: 1, position: 'relative' }}>
          {/* All other content goes here, above the gradient */}
          <Animated.ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={false} // 👈 iOS bounce disabled
            overScrollMode="never" // 👈 Android edge glow disabled
            onContentSizeChange={(w, h) => setContentHeight(h)}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          >

            <View style={{ height: spacing[8] }} />
            <View style={styles.contentContainer}>
              <View style={{ marginBottom: spacing[8] }}>
                <SearchBar />
                <View style={{ height: spacing[8] }} />
                <CalendarBar />
              </View>
              <View
                style={[styles.cardGrid, { columnGap: spacing[4] }]}
                onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
              >
                {palCards.map((card, index) => {
                  const cardWidth =
                    (containerWidth - spacing[4] * (columns - 1)) /
                    columns;

                  return (
                    <View
                      key={index}
                      style={[
                        styles.cardWrapper,
                        {
                          width: cardWidth,
                          marginBottom: spacing[4], // gap-4
                        },
                      ]}
                    >
                      {card.type === "multiple" ? (
                        <TouchableOpacity
                          onPress={() => handleCardPress(card, index)}
                        >
                          <PalCard {...card} />
                        </TouchableOpacity>
                      ) : card.type === "create" ? (
                        <TouchableOpacity
                          onPress={() => handleCardPress(card, index)}
                        >
                          <PalCard {...card} />
                        </TouchableOpacity>
                      ) : (
                        <PalCard {...card} />
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          </Animated.ScrollView>
        </View>
      </SafeAreaViewRN>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 120, // Space for bottom navigation
  },
  gradientBackground: {
    flex: 1,
    minHeight: "100%",
  },
  contentContainer: {
    width: "100%", // w-full
    paddingHorizontal: spacing[4], // px-4
    paddingTop: spacing[4], // Reduced from 62px to 16px
    paddingBottom: spacing[6], // Reduced from 120px to 24px + space for nav
    position: "relative",
    marginTop: spacing[8], // Add space above the large container
  },
  topSection: {
    marginTop: 62,
    marginBottom: spacing[8], // space-y-8
    gap: spacing[8],
  },
  cardGridSection: {
    // No marginTop; spacing is handled by topSection's marginBottom
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: spacing[4], // gap-4
  },
  cardWrapper: {
    // Width set dynamically based on screen size
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

export default Pals;
