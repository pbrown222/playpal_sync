import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface Pal {
  id: string;
  name: string;
  level?: string;
  image?: string;
  status?: "organizer" | "pending" | "cancelled";
  price?: string;
  canRemove?: boolean;
  subtitle?: string;
}

interface PalsCardProps {
  title: string;
  spotsLeft?: number;
  spotsTotal?: number;
  timeLeft?: string;
  pals: Pal[];
  isCreateMode?: boolean;
  isEventDetailsPage?: boolean;
  onAddPals?: () => void;
  onRemovePal?: (id: string) => void;
  showHelperText?: boolean;
  onTimeChange?: (time: string) => void;
}

const PalsCard: React.FC<PalsCardProps> = ({
  title,
  spotsLeft = 3,
  spotsTotal = 6,
  timeLeft = "6h 23m left to confirm",
  pals,
  isCreateMode = false,
  isEventDetailsPage = false,
  onAddPals,
  onRemovePal,
  showHelperText = false,
  onTimeChange,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "organizer":
        return colors.playpal.green;
      case "pending":
        return colors.playpal.orange;
      case "cancelled":
        return colors.playpal["inactive-gray"];
      default:
        return colors.playpal.gray;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.spotsContainer}>
          <Text style={styles.spotsText}>
            {spotsLeft}/{spotsTotal} spots left
          </Text>
        </View>
      </View>

      {/* Pals List */}
      <View style={styles.palsList}>
        {pals.map((pal) => (
          <View key={pal.id} style={styles.palItem}>
            <View style={styles.palInfo}>
              <View style={styles.avatarContainer}>
                {pal.image ? (
                  <Image source={{ uri: pal.image }} style={styles.avatar} />
                ) : (
                  <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarText}>
                      {pal.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                )}
                {pal.status && (
                  <View
                    style={[
                      styles.statusDot,
                      { backgroundColor: getStatusColor(pal.status) },
                    ]}
                  />
                )}
              </View>
              <View style={styles.palDetails}>
                <Text style={styles.palName}>{pal.name}</Text>
                {pal.level && <Text style={styles.palLevel}>{pal.level}</Text>}
                {pal.subtitle && (
                  <Text style={styles.palSubtitle}>{pal.subtitle}</Text>
                )}
              </View>
            </View>
            {pal.price && <Text style={styles.palPrice}>{pal.price}</Text>}
            {isCreateMode && pal.canRemove && onRemovePal && (
              <TouchableOpacity
                onPress={() => onRemovePal(pal.id)}
                style={styles.removeButton}
              >
                <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <Path
                    d="M0.528657 0.52866C0.653675 0.403679 0.823214 0.333469 0.99999 0.333469C1.17677 0.333469 1.3463 0.403679 1.47132 0.52866L4.99999 4.05733L8.52866 0.52866C8.59015 0.464986 8.66372 0.414198 8.74505 0.379259C8.82639 0.34432 8.91387 0.325929 9.00239 0.325159C9.09091 0.32439 9.17869 0.341258 9.26063 0.374778C9.34256 0.408299 9.41699 0.457801 9.47959 0.520396C9.54218 0.582991 9.59168 0.657426 9.62521 0.739357C9.65873 0.821288 9.67559 0.909074 9.67482 0.997594C9.67406 1.08611 9.65566 1.17359 9.62072 1.25493C9.58578 1.33627 9.535 1.40983 9.47132 1.47133L5.94266 4.99999L9.47132 8.52866C9.59276 8.65439 9.65996 8.8228 9.65844 8.99759C9.65692 9.17239 9.58681 9.3396 9.4632 9.46321C9.3396 9.58681 9.17239 9.65692 8.99759 9.65844C8.82279 9.65996 8.65439 9.59277 8.52866 9.47133L4.99999 5.94266L1.47132 9.47133C1.34559 9.59277 1.17719 9.65996 1.00239 9.65844C0.827591 9.65692 0.660383 9.58681 0.536777 9.46321C0.413172 9.3396 0.343059 9.17239 0.34154 8.99759C0.340021 8.8228 0.407218 8.65439 0.528657 8.52866L4.05732 4.99999L0.528657 1.47133C0.403676 1.34631 0.333466 1.17677 0.333466 0.999993C0.333466 0.823217 0.403676 0.653678 0.528657 0.52866Z"
                    fill={colors.playpal["inactive-gray"]}
                  />
                </Svg>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* Add Pals Button (Create mode) */}
        {isCreateMode && onAddPals && (
          <TouchableOpacity onPress={onAddPals} style={styles.addPalsButton}>
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
            <Text style={styles.addPalsText}>Add Pals</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Time Left Section */}
      {!isCreateMode && (
        <View style={styles.timeLeftContainer}>
          <View style={styles.timeLeftBackground}>
            <View style={styles.timeLeftContent}>
              <Text style={styles.timeLeftText}>{timeLeft}</Text>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <Path
                  d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                  stroke={
                    isEventDetailsPage
                      ? colors.playpal["inactive-gray"]
                      : colors.playpal["inactive-gray"]
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M9 4.5V9L12 10.5"
                  stroke={
                    isEventDetailsPage
                      ? colors.playpal["inactive-gray"]
                      : colors.playpal["inactive-gray"]
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
      )}

      {/* Helper Text */}
      {showHelperText && isCreateMode && (
        <Text style={styles.helperText}>
          Invite pals or let them join your event once you publish it.
        </Text>
      )}
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
    alignItems: "center",
    marginBottom: spacing[4],
  },
  title: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: typography.fontSizes.sm,
    color: colors.playpal.gray,
    lineHeight: 21,
  },
  spotsContainer: {
    backgroundColor: colors.playpal["off-white"],
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
  },
  spotsText: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 10,
    color: colors.playpal.gray,
    lineHeight: 15,
  },
  palsList: {
    gap: spacing[3],
  },
  palItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  palInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    position: "relative",
    marginRight: spacing[3],
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.playpal["inactive-gray"],
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 16,
    color: colors.playpal.white,
  },
  statusDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.playpal.white,
  },
  palDetails: {
    flex: 1,
  },
  palName: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 18,
  },
  palLevel: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 10,
    color: colors.playpal["inactive-gray"],
    lineHeight: 15,
  },
  palSubtitle: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 10,
    color: colors.playpal["inactive-gray"],
    lineHeight: 15,
  },
  palPrice: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 18,
  },
  removeButton: {
    padding: spacing[1],
    marginLeft: spacing[2],
  },
  addPalsButton: {
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
  addPalsText: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 12,
    color: colors.playpal.blue,
    lineHeight: 18,
  },
  timeLeftContainer: {
    marginTop: spacing[4],
  },
  timeLeftBackground: {
    backgroundColor: colors.playpal["off-white"],
    borderRadius: 8,
    padding: spacing[3],
  },
  timeLeftContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[2],
  },
  timeLeftText: {
    fontFamily: typography.fontFamilies.medium,
    fontSize: 14,
    color: colors.playpal["inactive-gray"],
    lineHeight: 21,
    textAlign: "center",
  },
  helperText: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 12,
    color: colors.playpal["inactive-gray"],
    lineHeight: 18,
    marginTop: spacing[3],
  },
});

export default PalsCard;
