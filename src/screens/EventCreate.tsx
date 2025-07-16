import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  ScaledSize,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import {
  EventSportLevel,
  PrivacyToggle,
  GearCard,
  PriceCard,
  Schedule,
  Venue,
  Grid,
} from "../components";
import { colors, typography, spacing, getGradientConfig } from "../styles/theme";
import ActionButton from "../components/ActionButton";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const EventCreate: React.FC = () => {
  const navigation = useNavigation();
  const [eventTitle, setEventTitle] = useState("");
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

  const handleClearTitle = () => {
    setEventTitle("");
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
              {/* Header */}
              <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                  <Svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <Path
                      d="M2.125 8.83207H19.625C19.8571 8.83207 20.0796 8.92426 20.2437 9.08835C20.4078 9.25245 20.5 9.47501 20.5 9.70707C20.5 9.93913 20.4078 10.1617 20.2437 10.3258C20.0796 10.4899 19.8571 10.5821 19.625 10.5821H2.125C1.89294 10.5821 1.67038 10.4899 1.50628 10.3258C1.34219 10.1617 1.25 9.93913 1.25 9.70707C1.25 9.47501 1.34219 9.25245 1.50628 9.08835C1.67038 8.92426 1.89294 8.83207 2.125 8.83207Z"
                      fill="white"
                    />
                    <Path
                      d="M2.48725 9.70707L9.7445 16.9626C9.9088 17.1269 10.0011 17.3497 10.0011 17.5821C10.0011 17.8144 9.9088 18.0373 9.7445 18.2016C9.5802 18.3659 9.35736 18.4582 9.125 18.4582C8.89264 18.4582 8.6698 18.3659 8.5055 18.2016L0.6305 10.3266C0.549014 10.2453 0.484365 10.1487 0.440253 10.0424C0.396142 9.93612 0.373436 9.82216 0.373436 9.70707C0.373436 9.59198 0.396142 9.47801 0.440253 9.37171C0.484365 9.26541 0.549014 9.16885 0.6305 9.08757L8.5055 1.21257C8.6698 1.04827 8.89264 0.955965 9.125 0.955965C9.35736 0.955965 9.5802 1.04827 9.7445 1.21257C9.9088 1.37687 10.0011 1.59971 10.0011 1.83207C10.0011 2.06443 9.9088 2.28727 9.7445 2.45157L2.48725 9.70707Z"
                      fill="white"
                    />
                  </Svg>
                </TouchableOpacity>
                <Text style={styles.title}>Create an Event</Text>
              </View>

              {/* Event Title & Privacy */}
              <View style={styles.titlePrivacySection}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.titleInput}
                    placeholder="Event Title"
                    value={eventTitle}
                    onChangeText={setEventTitle}
                    placeholderTextColor={colors.playpal["inactive-gray"]}
                  />
                  {eventTitle.length > 0 ? (
                    <TouchableOpacity
                      onPress={handleClearTitle}
                      style={styles.clearButton}
                    >
                      <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <Path
                          d="M0.528657 0.52866C0.653675 0.403679 0.823214 0.333469 0.99999 0.333469C1.17677 0.333469 1.3463 0.403679 1.47132 0.52866L4.99999 4.05733L8.52866 0.52866C8.59015 0.464986 8.66372 0.414198 8.74505 0.379259C8.82639 0.34432 8.91387 0.325929 9.00239 0.325159C9.09091 0.32439 9.17869 0.341258 9.26063 0.374778C9.34256 0.408299 9.41699 0.457801 9.47959 0.520396C9.54218 0.582991 9.59168 0.657426 9.62521 0.739357C9.65873 0.821288 9.67559 0.909074 9.67482 0.997594C9.67406 1.08611 9.65566 1.17359 9.62072 1.25493C9.58578 1.33627 9.535 1.40983 9.47132 1.47133L5.94266 4.99999L9.47132 8.52866C9.59276 8.65439 9.65996 8.8228 9.65844 8.99759C9.65692 9.17239 9.58681 9.3396 9.4632 9.46321C9.3396 9.58681 9.17239 9.65692 8.99759 9.65844C8.82279 9.65996 8.65439 9.59277 8.52866 9.47133L4.99999 5.94266L1.47132 9.47133C1.34559 9.59277 1.17719 9.65996 1.00239 9.65844C0.827591 9.65692 0.660383 9.58681 0.536777 9.46321C0.413172 9.3396 0.343059 9.17239 0.34154 8.99759C0.340021 8.8228 0.407218 8.65439 0.528657 8.52866L4.05732 4.99999L0.528657 1.47133C0.403676 1.34631 0.333466 1.17677 0.333466 0.999993C0.333466 0.823217 0.403676 0.653678 0.528657 0.52866Z"
                          fill={colors.playpal["inactive-gray"]}
                        />
                      </Svg>
                    </TouchableOpacity>
                  ) : null}
                </View>
                <PrivacyToggle
                  initialPrivate={true}
                  onChange={(isPrivate) =>
                    console.log("Privacy changed:", isPrivate)
                  }
                />
              </View>

              {/* Sport-Date-Venue Section */}
              <View style={styles.sportDateVenueSection}>
                <View style={styles.componentCard}>
                  <EventSportLevel
                    title="My Sports"
                    onSportSelect={(sport) =>
                      console.log("Sport selected:", sport)
                    }
                    onLevelSelect={(level) =>
                      console.log("Level selected:", level)
                    }
                  />
                </View>

                <View style={styles.componentCard}>
                  <Schedule
                    title="My Schedule"
                    onScheduleChange={(schedule) =>
                      console.log("Schedule changed:", schedule)
                    }
                  />
                </View>

                <View style={styles.componentCard}>
                  <Venue
                    title="My Location"
                    onVenueChange={(venue) =>
                      console.log("Venue changed:", venue)
                    }
                    onLocationClick={() => console.log("Location icon clicked")}
                  />
                </View>
              </View>

              {/* Pals Section */}
              <View style={styles.palsSection}>
                <View style={styles.palsHeader}>
                  <Text style={styles.palsTitle}>Pals</Text>
                  <Text style={styles.spotsLeft}>3 Spots Left</Text>
                </View>

                <View style={styles.palsControls}>
                  <TouchableOpacity style={styles.spotsButton}>
                    <Text style={styles.spotsButtonText}>Spots</Text>
                    <Svg width="16" height="16" viewBox="0 0 17 16" fill="none">
                      <Path
                        d="M3.56668 6.19535C3.6917 6.07037 3.86124 6.00016 4.03801 6.00016C4.21479 6.00016 4.38433 6.07037 4.50935 6.19535L8.03801 9.72401L11.5667 6.19535C11.6282 6.13167 11.7017 6.08089 11.7831 6.04595C11.8644 6.01101 11.9519 5.99262 12.0404 5.99185C12.1289 5.99108 12.2167 6.00795 12.2987 6.04147C12.3806 6.07499 12.455 6.12449 12.5176 6.18708C12.5802 6.24968 12.6297 6.32411 12.6632 6.40604C12.6968 6.48798 12.7136 6.57576 12.7128 6.66428C12.7121 6.7528 12.6937 6.84028 12.6587 6.92162C12.6238 7.00295 12.573 7.07652 12.5093 7.13801L8.50935 11.138C8.38433 11.263 8.21479 11.3332 8.03801 11.3332C7.86124 11.3332 7.6917 11.263 7.56668 11.138L3.56668 7.13801C3.4417 7.013 3.37149 6.84346 3.37149 6.66668C3.37149 6.4899 3.4417 6.32037 3.56668 6.19535Z"
                        fill={colors.playpal.gray}
                      />
                    </Svg>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.timeLeftButton}>
                    <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                      <Path
                        d="M10.75 0C15.5826 0 19.5 3.91738 19.5 8.75C19.5 13.5826 15.5826 17.5 10.75 17.5C5.91738 17.5 2 13.5826 2 8.75C2 3.91738 5.91738 0 10.75 0ZM10.75 1.75C8.89348 1.75 7.11301 2.4875 5.80025 3.80025C4.4875 5.11301 3.75 6.89348 3.75 8.75C3.75 10.6065 4.4875 12.387 5.80025 13.6997C7.11301 15.0125 8.89348 15.75 10.75 15.75C12.6065 15.75 14.387 15.0125 15.6997 13.6997C17.0125 12.387 17.75 10.6065 17.75 8.75C17.75 6.89348 17.0125 5.11301 15.6997 3.80025C14.387 2.4875 12.6065 1.75 10.75 1.75ZM10.75 3.5C10.9643 3.50003 11.1712 3.57871 11.3313 3.72113C11.4915 3.86354 11.5938 4.05978 11.6189 4.27262L11.625 4.375V8.38775L13.9936 10.7564C14.1506 10.9138 14.2417 11.1251 14.2484 11.3473C14.2552 11.5695 14.1772 11.786 14.0302 11.9527C13.8831 12.1195 13.6781 12.224 13.4568 12.2451C13.2355 12.2662 13.0145 12.2022 12.8386 12.0662L12.7564 11.9936L10.1314 9.36862C9.99538 9.23252 9.90804 9.05538 9.88287 8.86462L9.875 8.75V4.375C9.875 4.14294 9.96719 3.92038 10.1313 3.75628C10.2954 3.59219 10.5179 3.5 10.75 3.5Z"
                        fill={colors.playpal["inactive-gray"]}
                      />
                    </Svg>
                    <Text style={styles.timeLeftButtonText}>Time Left</Text>
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <Path
                        d="M3.52866 6.19535C3.65368 6.07037 3.82321 6.00016 3.99999 6.00016C4.17677 6.00016 4.3463 6.07037 4.47132 6.19535L7.99999 9.72401L11.5287 6.19535C11.5902 6.13167 11.6637 6.08089 11.7451 6.04595C11.8264 6.01101 11.9139 5.99262 12.0024 5.99185C12.0909 5.99108 12.1787 6.00795 12.2606 6.04147C12.3426 6.07499 12.417 6.12449 12.4796 6.18708C12.5422 6.24968 12.5917 6.32411 12.6252 6.40604C12.6587 6.48798 12.6756 6.57576 12.6748 6.66428C12.6741 6.7528 12.6557 6.84028 12.6207 6.92162C12.5858 7.00295 12.535 7.07652 12.4713 7.13801L8.47132 11.138C8.3463 11.263 8.17677 11.3332 7.99999 11.3332C7.82321 11.3332 7.65368 11.263 7.52866 11.138L3.52866 7.13801C3.40368 7.013 3.33347 6.84346 3.33347 6.66668C3.33347 6.4899 3.40368 6.32037 3.52866 6.19535Z"
                        fill={colors.playpal.gray}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>

                <Grid
                  pals={[
                    {
                      id: "1",
                      name: "Me",
                      level: "Pro",
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F9e77399850844341836ec1547fb78263?format=webp&width=800",
                      status: "organizer",
                      subtitle: "Organizer",
                      canRemove: true,
                    },
                    {
                      id: "2",
                      name: "Antony Smith",
                      level: "Intermediate",
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F63ec7bb8c4504058b34cb69b00fb6aa9?format=webp&width=800",
                      price: "$50.00",
                      canRemove: true,
                    },
                    {
                      id: "3",
                      name: "Jasmin R.",
                      level: "Intermediate",
                      image:
                        "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F63ec7bb8c4504058b34cb69b00fb6aa9?format=webp&width=800",
                      price: "$50.00",
                      canRemove: true,
                    },
                  ]}
                  isCreateMode={true}
                  onAddPals={() => console.log("Add pals clicked")}
                  onRemovePal={(id) => console.log("Remove pal:", id)}
                />

                <Text style={styles.helperText}>
                  Remove yourself if you are not playing
                </Text>
              </View>

              {/* Gear Section */}
              <GearCard
                title="Gear"
                subtitle="Suggest or Add gear for your event."
                gearItems={[
                  {
                    id: "1",
                    name: "Air Max 97",
                    price: "$20.99",
                    image:
                      "https://api.builder.io/api/v1/image/assets/TEMP/d44e35e5836231e8d08271587e218a336d6d5d64?width=174",
                    isMandatory: true,
                  },
                  {
                    id: "2",
                    name: "Air Max 97",
                    price: "$20.99",
                    image:
                      "https://api.builder.io/api/v1/image/assets/TEMP/d44e35e5836231e8d08271587e218a336d6d5d64?width=174",
                    isMandatory: false,
                  },
                ]}
                isCreateMode={true}
                onAddGear={() => console.log("Add gear clicked")}
                onToggleMandatory={(id, isMandatory) =>
                  console.log("Toggle gear mandatory:", id, isMandatory)
                }
              />

              {/* Price Section */}
              <PriceCard
                title="Price"
                totalPrice="$300.00"
                priceItems={[
                  {
                    id: "1",
                    name: "Me",
                    price: "$50.00",
                    type: "organizer",
                    image:
                      "https://cdn.builder.io/api/v1/image/assets%2Fe6d96f47172a4d02af910e18944a3f6d%2F9e77399850844341836ec1547fb78263?format=webp&width=800",
                    subtitle: "Organizer",
                    level: "Pro",
                  },
                  {
                    id: "2",
                    name: "Pickleball Court",
                    price: "$200.00",
                    type: "venue",
                    subtitle: "Venue",
                  },
                  {
                    id: "3",
                    name: "2 Sets Wilson balls",
                    price: "$50.00",
                    type: "gear",
                    subtitle: "Gear",
                  },
                ]}
                isCreateMode={true}
              />
              <ActionButton text="Create Event" variant="join" />
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
    paddingBottom: 100, // Space for fixed create button
  },
  gradientBackground: {
    flex: 1,
    minHeight: "100%",
  },
  container: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[2],
    gap: spacing[1],
    paddingBottom: spacing[6],
  },
  header: {
    position: "relative",
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  backButton: {
    position: "absolute",
    left: -5,
    top: 9,
    zIndex: 1,
    padding: spacing[2],
    width: 56,
    height: 55,
  },
  title: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.xl,
    color: colors.playpal.white,
    lineHeight: 26,
    paddingTop: 48,
  },
  titlePrivacySection: {
    gap: 10,
  },
  inputContainer: {
    position: "relative",
  },
  titleInput: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.playpal["inactive-gray"],
    borderRadius: 8,
    backgroundColor: colors.playpal.white,
    paddingHorizontal: 12,
    paddingRight: spacing[10],
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.base,
    color: colors.playpal.gray,
  },
  clearButton: {
    position: "absolute",
    right: 12,
    top: 17,
    padding: spacing[1],
  },
  sportDateVenueSection: {
    gap: 12,
    marginTop: 5,
  },
  componentCard: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.playpal.blue,
    backgroundColor: colors.playpal.white,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minHeight: 94,
  },
  palsSection: {
    backgroundColor: colors.playpal.white,
    borderRadius: 8,
    padding: spacing[3],
    shadowColor: colors.playpal["inactive-gray"],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 19.8,
    elevation: 4,
    marginTop: 7,
  },
  palsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing[4],
  },
  palsTitle: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 16,
    color: colors.playpal.gray,
    lineHeight: 26,
  },
  spotsLeft: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 14,
    color: colors.playpal.gray,
    lineHeight: 26,
    textAlign: "center",
  },
  palsControls: {
    flexDirection: "row",
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  spotsButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    paddingHorizontal: spacing[3],
    borderWidth: 1,
    borderColor: colors.playpal.blue,
    borderRadius: 8,
    backgroundColor: colors.playpal.white,
    gap: spacing[2],
    flex: 1,
    justifyContent: "center",
  },
  spotsButtonText: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 14,
    color: colors.playpal.gray,
    lineHeight: 21,
  },
  timeLeftButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    paddingHorizontal: spacing[3],
    borderWidth: 1,
    borderColor: colors.playpal.blue,
    borderRadius: 8,
    backgroundColor: colors.playpal.white,
    gap: spacing[2],
    flex: 1,
    justifyContent: "center",
  },
  timeLeftButtonText: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 14,
    color: colors.playpal.gray,
    lineHeight: 21,
  },
  helperText: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 10,
    color: colors.playpal.gray,
    lineHeight: 14,
    textAlign: "center",
    marginTop: spacing[2],
  },
  createButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
  },
  createButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.playpal.green,
    borderRadius: 8,
    paddingVertical: 10,
    backgroundColor: colors.playpal.white,
    alignItems: "center",
    justifyContent: "center",
    height: 57,
  },
  createButtonText: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.base,
    color: colors.playpal.green,
    lineHeight: 22.4,
  },
});

export default EventCreate;
