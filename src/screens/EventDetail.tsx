import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScaledSize,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import {
  BottomNavigation,
  SportAndLevel,
  DateTimeCard,
  LocationCard,
  PalsCard,
  GearCard,
  PriceCard,
  ActionButton,
} from "../components";
import { colors, typography, spacing, getGradientConfig } from "../styles/theme";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const EventDetail: React.FC = () => {
  const navigation = useNavigation();
  const gradient = getGradientConfig();
  const insets = useSafeAreaInsets();
  const [screen, setScreen] = useState<ScaledSize>(Dimensions.get("window"));
  const [contentHeight, setContentHeight] = useState(screen.height);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const onChange = ({ window }: { window: ScaledSize }) => setScreen(window);
    const sub = Dimensions.addEventListener("change", onChange);
    return () => sub.remove();
  }, []);

  const handleBack = () => {
    navigation.goBack();
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
          height: Math.max(contentHeight+50, screen.height),
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
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
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
            <View style={styles.container}>
              <View style={{ marginBottom: spacing[8] }}>
                {/* Remove SearchBar and CalendarBar components */}
              </View>
              {/* Header */}
              <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                  <Svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <Path
                      d="M2.12501 8.125H19.625C19.8571 8.125 20.0796 8.21719 20.2437 8.38128C20.4078 8.54538 20.5 8.76793 20.5 9C20.5 9.23206 20.4078 9.45462 20.2437 9.61872C20.0796 9.78281 19.8571 9.875 19.625 9.875H2.12501C1.89294 9.875 1.67038 9.78281 1.50629 9.61872C1.3422 9.45462 1.25001 9.23206 1.25001 9C1.25001 8.76793 1.3422 8.54538 1.50629 8.38128C1.67038 8.21719 1.89294 8.125 2.12501 8.125Z"
                      fill="white"
                    />
                    <Path
                      d="M2.48726 9L9.74451 16.2555C9.90881 16.4198 10.0011 16.6426 10.0011 16.875C10.0011 17.1074 9.90881 17.3302 9.74451 17.4945C9.58021 17.6588 9.35737 17.7511 9.12501 17.7511C8.89265 17.7511 8.66981 17.6588 8.50551 17.4945L0.630508 9.6195C0.549022 9.53822 0.484372 9.44166 0.440261 9.33536C0.39615 9.22905 0.373444 9.11509 0.373444 9C0.373444 8.88491 0.39615 8.77094 0.440261 8.66464C0.484372 8.55834 0.549022 8.46178 0.630508 8.3805L8.50551 0.505499C8.66981 0.341197 8.89265 0.248894 9.12501 0.248894C9.35737 0.248894 9.58021 0.341197 9.74451 0.505499C9.90881 0.6698 10.0011 0.892641 10.0011 1.125C10.0011 1.35736 9.90881 1.5802 9.74451 1.7445L2.48726 9Z"
                      fill="white"
                    />
                  </Svg>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Volleyball Ladies Tuesdays</Text>
                  <TouchableOpacity style={styles.shareButton}>
                    <Svg width="20" height="11" viewBox="0 0 20 11" fill="none">
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.535737 0.867759C0.642445 0.822073 0.757107 0.797857 0.873175 0.796493C0.989243 0.79513 1.10444 0.816646 1.21219 0.859812C1.31994 0.902978 1.41814 0.966949 1.50116 1.04807C1.58418 1.12919 1.65041 1.22587 1.69606 1.3326L0.883924 1.68078L1.69695 1.3326L1.6996 1.33967L1.71816 1.37943L1.80123 1.55088C1.87723 1.70288 1.99476 1.92557 2.15471 2.19511C2.57648 2.90365 3.0711 3.56621 3.63053 4.17199C3.7982 4.35238 3.9721 4.52687 4.15192 4.69515C5.4616 5.92264 7.29178 6.98311 9.72113 6.98311C10.6948 6.98756 11.6604 6.80703 12.5667 6.45111C13.651 6.02427 14.5586 5.38181 15.3027 4.68543C16.2979 3.74115 17.1159 2.62626 17.7179 1.39357L17.7418 1.34232L17.7462 1.3326C17.8407 1.12051 18.0149 0.95415 18.2311 0.869481C18.4473 0.784812 18.6882 0.788638 18.9016 0.880133C19.115 0.971628 19.2838 1.14344 19.3716 1.35842C19.4593 1.5734 19.4589 1.81428 19.3705 2.02897L19.3687 2.03339L19.3652 2.04046L19.3555 2.06343L19.3201 2.14032C19.1238 2.5491 18.9052 2.94679 18.6653 3.33157C18.2236 4.04115 17.7174 4.70853 17.1532 5.32525L17.8576 6.02957C18.0234 6.19528 18.1166 6.42007 18.1167 6.65449C18.1167 6.88892 18.0237 7.11377 17.858 7.2796C17.6923 7.44542 17.4675 7.53862 17.2331 7.53871C16.9986 7.53879 16.7738 7.44574 16.608 7.28004L15.8656 6.53771C15.3433 6.95996 14.7819 7.33161 14.1892 7.64767L14.8803 8.7099C14.9455 8.80713 14.9907 8.91634 15.0134 9.0312C15.036 9.14606 15.0356 9.26427 15.0121 9.37896C14.9887 9.49366 14.9427 9.60255 14.8768 9.69933C14.811 9.7961 14.7265 9.87883 14.6284 9.94269C14.5303 10.0066 14.4205 10.0503 14.3053 10.0714C14.1902 10.0924 14.072 10.0904 13.9576 10.0654C13.8433 10.0404 13.735 9.99294 13.6391 9.92576C13.5433 9.85857 13.4617 9.77301 13.3992 9.67404L12.5278 8.33608C11.9278 8.5199 11.2871 8.64981 10.6049 8.71078V10.0761C10.6049 10.3105 10.5117 10.5353 10.346 10.701C10.1803 10.8667 9.95551 10.9599 9.72113 10.9599C9.48676 10.9599 9.26198 10.8667 9.09625 10.701C8.93052 10.5353 8.83741 10.3105 8.83741 10.0761V8.71167C8.15253 8.64981 7.51183 8.5199 6.91355 8.33608L6.04309 9.67404C5.91239 9.86359 5.71287 9.99464 5.48701 10.0393C5.26114 10.084 5.02676 10.0387 4.83375 9.91321C4.64074 9.78768 4.50434 9.59178 4.45358 9.36721C4.40282 9.14264 4.44171 8.90712 4.56197 8.71078L5.25304 7.64767C4.63444 7.32069 4.07592 6.94069 3.57662 6.53683L2.8343 7.27915C2.66762 7.44013 2.44439 7.52921 2.21269 7.52719C1.98098 7.52518 1.75933 7.43224 1.59548 7.26839C1.43163 7.10454 1.33869 6.88289 1.33668 6.65118C1.33466 6.41947 1.42374 6.19624 1.58471 6.02957L2.28904 5.32525C1.66384 4.64141 1.11012 3.89551 0.636482 3.09915C0.447854 2.78103 0.273586 2.45461 0.114203 2.12088L0.0850397 2.05725L0.0762025 2.03869L0.0744351 2.0325L0.0735513 2.03074C0.0709002 2.03074 0.0709002 2.02897 0.883924 1.68078L0.0717839 2.02985C0.025935 1.92315 0.00156704 1.80846 7.31252e-05 1.69233C-0.00142079 1.57621 0.0199886 1.46093 0.0630775 1.35308C0.106166 1.24524 0.170089 1.14694 0.251192 1.06382C0.332294 0.980697 0.428986 0.913489 0.535737 0.867759Z"
                        fill="white"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Event Info Cards */}
              <View style={styles.eventInfoContainer}>
                <View style={styles.eventInfoGrid}>
                  <SportAndLevel />
                  <DateTimeCard />
                </View>
              </View>

              <LocationCard />

              <PalsCard
                title="Pals"
                spotsLeft={3}
                spotsTotal={6}
                timeLeft="6h 23m left to confirm"
                pals={[
                  {
                    id: "1",
                    name: "Bea Pugh",
                    level: "Pro",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F9e77399850844341836ec1547fb78263?format=webp&width=800",
                    status: "organizer",
                  },
                  {
                    id: "2",
                    name: "Antony Smith",
                    level: "Intermediate",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F63ec7bb8c4504058b34cb69b00fb6aa9?format=webp&width=800",
                    status: "pending",
                  },
                  {
                    id: "3",
                    name: "Claire Thompson",
                    level: "Intermediate",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2Fbaeb35ed07c64227ae65e7b67041882f?format=webp&width=800",
                    status: "cancelled",
                  },
                ]}
                isCreateMode={false}
                isEventDetailsPage={true}
              />

              <GearCard
                title="Gear"
                subtitle="Include suggested gear for this event."
                gearItems={[
                  {
                    id: "1",
                    name: "Air Max 97",
                    price: "$20.99",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F7034801570074dc88c33053c7f9e8f2e?format=webp&width=800",
                  },
                  {
                    id: "2",
                    name: "Air Max 97",
                    price: "$20.99",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F7034801570074dc88c33053c7f9e8f2e?format=webp&width=800",
                  },
                ]}
                isCreateMode={false}
              />

              <PriceCard
                title="Price"
                totalPrice="$0.00"
                priceItems={[
                  {
                    id: "1",
                    name: "Bea Pugh",
                    price: "$0.00",
                    type: "organizer",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F9e77399850844341836ec1547fb78263?format=webp&width=800",
                    subtitle: "Organizer",
                    level: "Pro",
                  },
                  {
                    id: "2",
                    name: "Parking lot",
                    price: "$0.00",
                    type: "venue",
                    subtitle: "McCarren Park",
                  },
                ]}
                isCreateMode={false}
              />

              <ActionButton text="Join Event" variant="join" />
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
  container: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[2],
    paddingBottom: spacing[6],
    gap: spacing[4],
  },
  header: {
    position: "relative",
    paddingTop: spacing[2],
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: spacing[2],
    zIndex: 1,
    padding: spacing[2],
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 48, // pt-12 equivalent
  },
  title: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.xl,
    color: colors.playpal.white,
    lineHeight: 24,
    flex: 1,
  },
  shareButton: {
    padding: spacing[2],
  },
  eventInfoContainer: {
    marginBottom: spacing[4],
  },
  eventInfoGrid: {
    gap: spacing[3],
  },
});

export default EventDetail;
