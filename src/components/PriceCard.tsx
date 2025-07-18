import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import Box from "./Box";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface PriceItem {
  id: string;
  name: string;
  price: string;
  type: "organizer" | "venue" | "gear";
  subtitle?: string;
  level?: string;
  image?: string;
}

interface PriceCardProps {
  title: string;
  totalPrice: string;
  priceItems: PriceItem[];
  isCreateMode?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  totalPrice,
  priceItems,
  isCreateMode = false,
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "organizer":
        return (
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              d="M10 12C12.7614 12 15 9.76142 15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 9.76142 7.23858 12 10 12Z"
              stroke={colors.playpal.blue}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M2 18V17C2 15.9391 2.42143 14.9217 3.17157 14.1716C3.92172 13.4214 4.93913 13 6 13H14C15.0609 13 16.0783 13.4214 16.8284 14.1716C17.5786 14.9217 18 15.9391 18 17V18"
              stroke={colors.playpal.blue}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "venue":
        return (
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
        );
      case "gear":
        return (
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path
              d="M8.99997 1.5L11.09 5.74L15.84 6.41L12.42 9.77L13.18 14.51L8.99997 12.31L4.81997 14.51L5.57997 9.77L2.15997 6.41L6.90997 5.74L8.99997 1.5Z"
              stroke={colors.playpal.blue}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      default:
        return null;
    }
  };

  return (
    <Box style={styles.container} title={title}>
      <View style={styles.priceHeader}>
        <Text style={styles.totalPrice}>{totalPrice}</Text>
      </View>

      {/* Price Items List */}
      <View style={styles.priceList}>
        {priceItems.map((item) => (
          <View key={item.id} style={styles.priceItem}>
            <View style={styles.itemInfo}>
              <View style={styles.iconContainer}>
                {item.image ? (
                  <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                  />
                ) : (
                  getIcon(item.type)
                )}
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                {item.subtitle && (
                  <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                )}
                {item.level && (
                  <Text style={styles.itemLevel}>{item.level}</Text>
                )}
              </View>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
      </View>

      {/* Total */}
      <View style={styles.totalContainer}>
        <View style={styles.totalDivider} />
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>{totalPrice}</Text>
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    // Box now handles the styling
  },
  priceHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: spacing[4],
  },
  totalPrice: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.sm,
    color: colors.playpal.gray,
    lineHeight: 21,
  },
  priceList: {
    gap: spacing[3],
  },
  priceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing[3],
  },
  itemImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 18,
  },
  itemSubtitle: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 10,
    color: colors.playpal["inactive-gray"],
    lineHeight: 15,
  },
  itemLevel: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 10,
    color: colors.playpal["inactive-gray"],
    lineHeight: 15,
  },
  itemPrice: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 18,
  },
  totalContainer: {
    marginTop: spacing[4],
  },
  totalDivider: {
    height: 1,
    backgroundColor: colors.playpal["inactive-gray"],
    opacity: 0.3,
    marginBottom: spacing[3],
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.sm,
    color: colors.playpal.gray,
    lineHeight: 21,
  },
  totalAmount: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.sm,
    color: colors.playpal.gray,
    lineHeight: 21,
  },
});

export default PriceCard;
