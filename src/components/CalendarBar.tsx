import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

const CalendarBar: React.FC = () => {
  const { width: screenWidth } = Dimensions.get("window");

  // Responsive text sizing matching React version
  const getResponsiveTextSize = () => {
    if (screenWidth >= 992) return 16; // xl:text-[16px]
    if (screenWidth >= 640) return 16; // lg:text-[16px]
    if (screenWidth >= 480) return 15; // md:text-[15px]
    if (screenWidth >= 375) return 14; // sm:text-[14px]
    return 13; // xs:text-[13px]
  };

  // Responsive text sizing for date text
  const getResponsiveDateTextSize = () => {
    if (screenWidth >= 992) return 17; // xl:text-[17px]
    if (screenWidth >= 640) return 16; // lg:text-[16px]
    if (screenWidth >= 480) return 15; // md:text-[15px]
    if (screenWidth >= 375) return 14; // sm:text-[14px]
    return 13; // xs:text-[13px]
  };

  // Responsive padding for date text
  const getResponsivePadding = () => {
    if (screenWidth >= 992) return spacing[4]; // xl:pl-4
    if (screenWidth >= 640) return spacing[3]; // lg:pl-3
    if (screenWidth >= 480) return spacing[2]; // md:pl-2
    if (screenWidth >= 375) return spacing[1]; // sm:pl-1
    return 0; // xs:pl-0
  };

  // Responsive margin for calendar icon
  const getResponsiveIconMargin = () => {
    if (screenWidth >= 992) return spacing[5]; // xl:mr-5
    if (screenWidth >= 640) return spacing[4]; // lg:mr-4
    if (screenWidth >= 480) return spacing[3]; // md:mr-3
    if (screenWidth >= 375) return spacing[2]; // sm:mr-2
    return spacing[1]; // xs:mr-1
  };

  const textSize = getResponsiveTextSize();
  const dateTextSize = getResponsiveDateTextSize();
  const paddingLeft = getResponsivePadding();
  const iconMargin = getResponsiveIconMargin();

  // Calendar icon SVG - exact from React
  const CalendarIcon = () => (
    <Svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      style={{ marginRight: iconMargin }}
    >
      <Path
        d="M22.6667 19.0287C23.0203 19.0287 23.3594 18.8883 23.6095 18.6382C23.8595 18.3882 24 18.049 24 17.6954C24 17.3418 23.8595 17.0026 23.6095 16.7526C23.3594 16.5025 23.0203 16.3621 22.6667 16.3621C22.313 16.3621 21.9739 16.5025 21.7239 16.7526C21.4738 17.0026 21.3333 17.3418 21.3333 17.6954C21.3333 18.049 21.4738 18.3882 21.7239 18.6382C21.9739 18.8883 22.313 19.0287 22.6667 19.0287ZM22.6667 24.3621C23.0203 24.3621 23.3594 24.2216 23.6095 23.9715C23.8595 23.7215 24 23.3823 24 23.0287C24 22.6751 23.8595 22.336 23.6095 22.0859C23.3594 21.8359 23.0203 21.6954 22.6667 21.6954C22.313 21.6954 21.9739 21.8359 21.7239 22.0859C21.4738 22.336 21.3333 22.6751 21.3333 23.0287C21.3333 23.3823 21.4738 23.7215 21.7239 23.9715C21.9739 24.2216 22.313 24.3621 22.6667 24.3621ZM17.3333 17.6954C17.3333 18.049 17.1929 18.3882 16.9428 18.6382C16.6928 18.8883 16.3536 19.0287 16 19.0287C15.6464 19.0287 15.3072 18.8883 15.0572 18.6382C14.8071 18.3882 14.6667 18.049 14.6667 17.6954C14.6667 17.3418 14.8071 17.0026 15.0572 16.7526C15.3072 16.5025 15.6464 16.3621 16 16.3621C16.3536 16.3621 16.6928 16.5025 16.9428 16.7526C17.1929 17.0026 17.3333 17.3418 17.3333 17.6954ZM17.3333 23.0287C17.3333 23.3823 17.1929 23.7215 16.9428 23.9715C16.6928 24.2216 16.3536 24.3621 16 24.3621C15.6464 24.3621 15.3072 24.2216 15.0572 23.9715C14.8071 23.7215 14.6667 23.3823 14.6667 23.0287C14.6667 22.6751 14.8071 22.336 15.0572 22.0859C15.3072 21.8359 15.6464 21.6954 16 21.6954C16.3536 21.6954 16.6928 21.8359 16.9428 22.0859C17.1929 22.336 17.3333 22.6751 17.3333 23.0287ZM9.33333 19.0287C9.68696 19.0287 10.0261 18.8883 10.2761 18.6382C10.5262 18.3882 10.6667 18.049 10.6667 17.6954C10.6667 17.3418 10.5262 17.0026 10.2761 16.7526C10.0261 16.5025 9.68696 16.3621 9.33333 16.3621C8.97971 16.3621 8.64057 16.5025 8.39052 16.7526C8.14048 17.0026 8 17.3418 8 17.6954C8 18.049 8.14048 18.3882 8.39052 18.6382C8.64057 18.8883 8.97971 19.0287 9.33333 19.0287ZM9.33333 24.3621C9.68696 24.3621 10.0261 24.2216 10.2761 23.9715C10.5262 23.7215 10.6667 23.3823 10.6667 23.0287C10.6667 22.6751 10.5262 22.336 10.2761 22.0859C10.0261 21.8359 9.68696 21.6954 9.33333 21.6954C8.97971 21.6954 8.64057 21.8359 8.39052 22.0859C8.14048 22.336 8 22.6751 8 23.0287C8 23.3823 8.14048 23.7215 8.39052 23.9715C8.64057 24.2216 8.97971 24.3621 9.33333 24.3621Z"
        fill={colors.playpal["inactive-gray"]}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.3333 2.69556C9.59852 2.69556 9.85287 2.80091 10.0404 2.98845C10.2279 3.17599 10.3333 3.43034 10.3333 3.69556V4.71289C11.216 4.69556 12.188 4.69556 13.2573 4.69556H18.7413C19.812 4.69556 20.784 4.69556 21.6666 4.71289V3.69556C21.6666 3.43034 21.772 3.17599 21.9595 2.98845C22.1471 2.80091 22.4014 2.69556 22.6666 2.69556C22.9319 2.69556 23.1862 2.80091 23.3737 2.98845C23.5613 3.17599 23.6666 3.43034 23.6666 3.69556V4.79822C24.0133 4.82489 24.3417 4.85867 24.652 4.89956C26.2146 5.11022 27.48 5.55289 28.4786 6.55022C29.476 7.54889 29.9186 8.81422 30.1293 10.3769C30.3333 11.8969 30.3333 13.8369 30.3333 16.2876V19.1036C30.3333 21.5542 30.3333 23.4956 30.1293 25.0142C29.9186 26.5769 29.476 27.8422 28.4786 28.8409C27.48 29.8382 26.2146 30.2809 24.652 30.4916C23.132 30.6956 21.192 30.6956 18.7413 30.6956H13.26C10.8093 30.6956 8.86797 30.6956 7.3493 30.4916C5.78664 30.2809 4.5213 29.8382 3.52264 28.8409C2.5253 27.8422 2.08264 26.5769 1.87197 25.0142C1.66797 23.4942 1.66797 21.5542 1.66797 19.1036V16.2876C1.66797 13.8369 1.66797 11.8956 1.87197 10.3769C2.08264 8.81422 2.5253 7.54889 3.52264 6.55022C4.5213 5.55289 5.78664 5.11022 7.3493 4.89956C7.66041 4.85867 7.98886 4.82489 8.33464 4.79822V3.69556C8.33464 3.43057 8.43981 3.17642 8.62706 2.98892C8.81431 2.80142 9.06832 2.69591 9.3333 2.69556ZM7.6133 6.88222C6.2733 7.06222 5.49997 7.40089 4.93597 7.96489C4.37197 8.52889 4.0333 9.30222 3.8533 10.6422C3.82308 10.8689 3.7973 11.1084 3.77597 11.3609H28.224C28.2026 11.1084 28.1769 10.8684 28.1466 10.6409C27.9666 9.30089 27.628 8.52756 27.064 7.96356C26.5 7.39956 25.7266 7.06089 24.3853 6.88089C23.016 6.69689 21.2093 6.69422 18.6666 6.69422H13.3333C10.7906 6.69422 8.9853 6.69822 7.6133 6.88222ZM3.66664 16.3622C3.66664 15.2236 3.66664 14.2329 3.68397 13.3622H28.316C28.3333 14.2329 28.3333 15.2236 28.3333 16.3622V19.0289C28.3333 21.5716 28.3306 23.3782 28.1466 24.7489C27.9666 26.0889 27.628 26.8622 27.064 27.4262C26.5 27.9902 25.7266 28.3289 24.3853 28.5089C23.016 28.6929 21.2093 28.6956 18.6666 28.6956H13.3333C10.7906 28.6956 8.9853 28.6929 7.6133 28.5089C6.2733 28.3289 5.49997 27.9902 4.93597 27.4262C4.37197 26.8622 4.0333 26.0889 3.8533 24.7476C3.6693 23.3782 3.66664 21.5716 3.66664 19.0289V16.3622Z"
        fill={colors.playpal["inactive-gray"]}
      />
    </Svg>
  );

  return (
    <View style={styles.container}>
      {/* Left section - Next 7 days */}
      <View style={styles.leftSection}>
        <Text
          style={[
            styles.nextDaysText,
            {
              fontSize: textSize,
            },
          ]}
        >
          Next 7 days
        </Text>
      </View>

      {/* Right section - Date and calendar */}
      <View style={styles.rightSection}>
        <Text
          style={[
            styles.dateText,
            {
              fontSize: dateTextSize,
              paddingLeft: paddingLeft,
            },
          ]}
        >
          3rd - 7th June 2024
        </Text>
        <CalendarIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 43, // h-[43px]
    backgroundColor: colors.playpal["off-white"], // bg-playpal-off-white
    borderRadius: borderRadius.full, // rounded-full
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14, // px-[14px]
    gap: 11, // gap-[11px]
  },
  leftSection: {
    justifyContent: "center",
    alignItems: "center",
    width: 96, // w-24 (24 * 4 = 96)
    height: 38, // h-[38px]
  },
  nextDaysText: {
    color: colors.playpal.gray, // text-playpal-gray
    textAlign: "center",
    fontWeight: "700" as const, // font-bold
    lineHeight: 24, // leading-6
    fontFamily: typography.fontFamilies.bold,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11, // gap-[11px]
    backgroundColor: colors.playpal.white, // bg-white
    borderRadius: borderRadius.full, // rounded-full
    paddingVertical: 3, // py-[3px]
    height: 38, // h-[38px]
    flex: 1, // flex-1
  },
  dateText: {
    color: colors.playpal.gray, // text-playpal-gray
    textAlign: "center",
    fontWeight: "700" as const, // font-bold
    lineHeight: 16, // leading-[16px]
    flex: 1, // flex-1
    fontFamily: typography.fontFamilies.bold,
  },
});

export default CalendarBar;
