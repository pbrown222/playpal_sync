import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

const LocationCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2C5.13401 2 2 5.13401 2 9C2 11.2061 3.33607 13.268 5.20492 14.8876L8.6463 17.8702C8.8493 18.0461 9.1507 18.0461 9.3537 17.8702L12.7951 14.8876C14.6639 13.268 16 11.2061 16 9C16 5.13401 12.866 2 9 2ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 12.0264 16.1902 14.5918 14.1049 16.399L10.6635 19.3816C9.7088 20.209 8.2912 20.209 7.3365 19.3816L3.89505 16.399C1.80977 14.5918 0 12.0264 0 9Z"
            fill={colors.playpal.blue}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 2C4 3.1046 3.1046 4 2 4C0.8954 4 0 3.1046 0 2C0 0.89543 0.8954 0 2 0C3.1046 0 4 0.89543 4 2Z"
            fill={colors.playpal.blue}
            transform="translate(7, 7)"
          />
        </Svg>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.venueName}>McCarren Park</Text>
        <Text style={styles.venueAddress}>
          776 Lorimer Street, Brooklyn, NY 11222
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    backgroundColor: colors.playpal.white,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 6,
    gap: 12,
  },
  iconContainer: {
    width: 65,
    height: 62,
    backgroundColor: colors.playpal.blue,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexShrink: 0,
  },
  textContainer: {
    flex: 1,
    minWidth: 0,
  },
  venueName: {
    fontFamily: typography.fontFamilies.bold,
    color: colors.playpal.gray,
    fontSize: 12,
    lineHeight: 16,
  },
  venueAddress: {
    fontFamily: typography.fontFamilies.regular,
    color: colors.playpal.gray,
    fontSize: 12,
    lineHeight: 24,
  },
});

export default LocationCard;
