import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { colors, borderRadius, shadows } from "../styles/theme";

interface BoxProps {
  children: React.ReactNode;
  style?: object;
}

const Box: React.FC<BoxProps> = ({ children, style = {} }) => {
  const { width: screenWidth } = Dimensions.get("window");

  // Responsive max width matching React breakpoints
  const getMaxWidth = () => {
    if (screenWidth >= 992) return 672; // xl:max-w-2xl
    if (screenWidth >= 640) return 576; // lg:max-w-xl
    if (screenWidth >= 480) return 512; // md:max-w-lg
    if (screenWidth >= 375) return 448; // sm:max-w-md
    return 384; // max-w-sm
  };

  return (
    <View
      style={[
        styles.container,
        {
          maxWidth: getMaxWidth(),
          width: screenWidth < getMaxWidth() ? "100%" : getMaxWidth(),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.playpal.white, // bg-white
    borderRadius: borderRadius.lg, // rounded-lg
    ...shadows.searchBar, // shadow-sm equivalent
    alignSelf: "center", // mx-auto equivalent
  },
});

export default Box;
