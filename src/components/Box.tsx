import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { colors, borderRadius, shadows, typography, spacing } from "../styles/theme";

interface BoxProps {
  children: React.ReactNode;
  style?: object;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onIconPress?: () => void;
}

const Box: React.FC<BoxProps> = ({ 
  children, 
  style = {}, 
  title, 
  subtitle, 
  icon, 
  onIconPress 
}) => {
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
      {/* Header section - only render if title or icon provided */}
      {(title || icon) && (
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {title && <Text style={styles.title}>{title}</Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
          {icon && (
            <TouchableOpacity
              onPress={onIconPress}
              style={styles.iconButton}
              disabled={!onIconPress}
            >
              {icon}
            </TouchableOpacity>
          )}
        </View>
      )}
      
      {/* Content section */}
      <View style={title || icon ? styles.content : undefined}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.playpal.white, // bg-white
    borderRadius: borderRadius.lg, // rounded-lg
    ...shadows.searchBar, // shadow-sm equivalent
    alignSelf: "center", // mx-auto equivalent
    padding: spacing[4], // p-4
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing[6], // mb-6
  },
  headerContent: {
    flex: 1,
  },
  title: {
    color: colors.playpal.gray,
    fontWeight: "700" as const,
    fontSize: typography.fontSizes.xl,
    lineHeight: 24,
    marginBottom: 4,
    fontFamily: typography.fontFamilies.bold,
  },
  subtitle: {
    color: colors.playpal.gray,
    fontSize: typography.fontSizes.xs,
    lineHeight: 20,
    fontFamily: typography.fontFamilies.regular,
  },
  iconButton: {
    padding: 4,
    borderRadius: borderRadius.DEFAULT,
    marginTop: -4,
  },
  content: {
    // Content styling when header is present
  },
});

export default Box;
