import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import {
  colors,
  typography,
  borderRadius,
  shadows,
  spacing,
} from "../styles/theme";

const SearchBar: React.FC = () => {
  const { width: screenWidth } = Dimensions.get("window");

  // Responsive text sizing matching React version
  const getResponsiveTextSize = () => {
    if (screenWidth >= 992) return 17; // xl:text-[17px]
    if (screenWidth >= 640) return 16; // lg:text-[16px]
    if (screenWidth >= 480) return 15; // md:text-[15px]
    if (screenWidth >= 375) return 14; // sm:text-[14px]
    return 13; // xs:text-[13px]
  };

  // Responsive margin for search icon matching React version
  const getResponsiveIconMargin = () => {
    if (screenWidth >= 992) return spacing[5]; // xl:mr-5
    if (screenWidth >= 640) return spacing[4]; // lg:mr-4
    if (screenWidth >= 480) return spacing[3]; // md:mr-3
    if (screenWidth >= 375) return spacing[2]; // sm:mr-2
    return spacing[1]; // xs:mr-1
  };

  const textSize = getResponsiveTextSize();
  const iconMargin = getResponsiveIconMargin();

  // Search icon SVG - exact from React
  const SearchIcon = () => (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ marginRight: iconMargin }}
    >
      <Path
        d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
        stroke={colors.playpal.gray}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  // Filter icon SVG - exact from React
  const FilterIcon = () => (
    <Svg width="21" height="16" viewBox="0 0 21 16" fill="none">
      <Path
        d="M14.5 10C15.8059 10 16.9141 10.8353 17.3262 12H19.5C20.0523 12 20.5 12.4477 20.5 13C20.5 13.5523 20.0523 14 19.5 14H17.3262C16.9141 15.1647 15.8059 16 14.5 16C13.1941 16 12.0859 15.1647 11.6738 14H1.5C0.94772 14 0.5 13.5523 0.5 13C0.5 12.4477 0.94772 12 1.5 12H11.6738C12.0859 10.8353 13.1941 10 14.5 10ZM14.5 12C13.9477 12 13.5 12.4477 13.5 13C13.5 13.5523 13.9477 14 14.5 14C15.0523 14 15.5 13.5523 15.5 13C15.5 12.4477 15.0523 12 14.5 12ZM6.5 0C7.80585 0 8.91406 0.835322 9.32617 2H19.5C20.0523 2 20.5 2.44772 20.5 3C20.5 3.55228 20.0523 4 19.5 4H9.32617C8.91406 5.16468 7.80585 6 6.5 6C5.19415 6 4.08594 5.16468 3.67383 4H1.5C0.94772 4 0.5 3.55228 0.5 3C0.5 2.44772 0.94772 2 1.5 2H3.67383C4.08594 0.835322 5.19415 0 6.5 0ZM6.5 2C5.94772 2 5.5 2.44772 5.5 3C5.5 3.55228 5.94772 4 6.5 4C7.05228 4 7.5 3.55228 7.5 3C7.5 2.44772 7.05228 2 6.5 2Z"
        fill={colors.playpal.gray}
      />
    </Svg>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <SearchIcon />
          <Text
            style={[
              styles.searchText,
              {
                fontSize: textSize,
              },
            ]}
          >
            Search
          </Text>
          <FilterIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 53, // h-[53px]
  },
  searchButton: {
    width: "100%",
    height: 53, // h-[53px]
    backgroundColor: colors.playpal.white, // bg-white
    borderRadius: borderRadius["3xl"], // rounded-3xl
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing[4], // px-4
    ...shadows.searchBar, // shadow-[0px_10px_22px_0px_rgba(176,177,184,0.50)]
  },
  searchText: {
    color: colors.playpal.gray, // text-playpal-gray
    fontWeight: typography.fontWeights.normal, // font-normal
    lineHeight: 24, // leading-6
    flex: 1,
    fontFamily: typography.fontFamilies.regular,
  },
});

export default SearchBar;
