import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface GearItem {
  id: string;
  name: string;
  price: string;
  image: string;
  isMandatory?: boolean;
}

interface GearCardProps {
  title: string;
  subtitle?: string;
  gearItems: GearItem[];
  isCreateMode?: boolean;
  onAddGear?: () => void;
  onToggleMandatory?: (id: string, isMandatory: boolean) => void;
}

const GearCard: React.FC<GearCardProps> = ({
  title,
  subtitle,
  gearItems,
  isCreateMode = false,
  onAddGear,
  onToggleMandatory,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        <View style={styles.iconContainer}>
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path
              d="M8.99997 1.5L11.09 5.74L15.84 6.41L12.42 9.77L13.18 14.51L8.99997 12.31L4.81997 14.51L5.57997 9.77L2.15997 6.41L6.90997 5.74L8.99997 1.5Z"
              stroke={colors.playpal.blue}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      </View>

      {/* Gear Items List */}
      <View style={styles.gearList}>
        {gearItems.map((item) => (
          <View key={item.id} style={styles.gearItem}>
            <View style={styles.gearInfo}>
              <Image source={{ uri: item.image }} style={styles.gearImage} />
              <View style={styles.gearDetails}>
                <Text style={styles.gearName}>{item.name}</Text>
                <Text style={styles.gearPrice}>{item.price}</Text>
              </View>
            </View>
            {isCreateMode && onToggleMandatory && (
              <TouchableOpacity
                onPress={() => onToggleMandatory(item.id, !item.isMandatory)}
                style={styles.mandatoryButton}
              >
                <Text
                  style={[
                    styles.mandatoryText,
                    item.isMandatory && styles.mandatoryTextActive,
                  ]}
                >
                  {item.isMandatory ? "Required" : "Optional"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* Add Gear Button (Create mode) */}
        {isCreateMode && onAddGear && (
          <TouchableOpacity onPress={onAddGear} style={styles.addGearButton}>
            <View style={styles.addIcon}>
              <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <Path
                  d="M6 1V11M1 6H11"
                  stroke={colors.playpal.blue}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
            <Text style={styles.addGearText}>Add Gear</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.playpal.white,
    borderRadius: 8,
    padding: spacing[4],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing[4],
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.sm,
    color: colors.playpal.gray,
    lineHeight: 21,
    marginBottom: spacing[1],
  },
  subtitle: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 12,
    color: colors.playpal["inactive-gray"],
    lineHeight: 18,
  },
  iconContainer: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  gearList: {
    gap: spacing[3],
  },
  gearItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gearInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  gearImage: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: spacing[3],
  },
  gearDetails: {
    flex: 1,
  },
  gearName: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 18,
  },
  gearPrice: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 18,
  },
  mandatoryButton: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.playpal["inactive-gray"],
  },
  mandatoryText: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 10,
    color: colors.playpal["inactive-gray"],
    lineHeight: 15,
  },
  mandatoryTextActive: {
    color: colors.playpal.green,
  },
  addGearButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing[2],
  },
  addIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.playpal.blue,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing[3],
  },
  addGearText: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 12,
    color: colors.playpal.blue,
    lineHeight: 18,
  },
});

export default GearCard;
