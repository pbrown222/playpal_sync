import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius } from "../styles/theme";

interface PalCardProps {
  type: "create" | "single" | "multiple";
  status?: string;
  images?: string[];
  additionalCount?: number;
}

const PalCard: React.FC<PalCardProps> = ({
  type,
  status,
  images = [],
  additionalCount,
}) => {
  const { width: screenWidth } = Dimensions.get("window");



  // Responsive text sizing matching React version
  const getResponsiveTextSize = () => {
    if (screenWidth >= 992) return 16; // xl:text-[16px]
    if (screenWidth >= 640) return 14; // lg:text-[14px]
    if (screenWidth >= 480) return 12; // md:text-[12px]
    if (screenWidth >= 375) return 10; // sm:text-[10px]
    return 10; // xs:text-[10px]
  };

  // Responsive image sizing matching React version
  const getResponsiveImageSize = () => {
    if (screenWidth >= 992) return 110; // xl:w-[110px] h-[110px]
    if (screenWidth >= 640) return 96; // lg:w-[96px] h-[96px]
    if (screenWidth >= 480) return 78; // md:w-[78px] h-[78px]
    if (screenWidth >= 375) return 60; // sm:w-[60px] h-[60px]
    if (screenWidth >= 320) return 52; // xs:w-[52px] h-[52px]
    return 42; // base w-[42px] h-[42px]
  };

  const textSize = getResponsiveTextSize();
  const imageSize = getResponsiveImageSize();

  if (type === "create") {
    return (
      <View style={styles.cardWrapper}>
        {/* Background */}
        <View
          style={[
            styles.cardBackground,
            { backgroundColor: colors.playpal["off-white"] },
          ]}
        />

        {/* Image area - 75% height */}
        <View
          style={[styles.imageArea, { backgroundColor: colors.playpal.white }]}
        >
          <View style={styles.createIconContainer}>
            <Svg
              width={imageSize}
              height={imageSize}
              viewBox="0 0 43 43"
              fill="none"
            >
              <Path
                d="M19.4817 23.6011H10.662C10.1622 23.6011 9.74359 23.4317 9.40609 23.093C9.06859 22.7544 8.89925 22.3357 8.89808 21.8371C8.8969 21.3385 9.06624 20.9199 9.40609 20.5812C9.74594 20.2425 10.1646 20.0732 10.662 20.0732H19.4817V11.2535C19.4817 10.7538 19.651 10.3351 19.9897 9.99761C20.3284 9.66011 20.747 9.49078 21.2456 9.4896C21.7442 9.48842 22.1634 9.65776 22.5033 9.99761C22.8431 10.3375 23.0119 10.7561 23.0095 11.2535V20.0732H31.8292C32.329 20.0732 32.7482 20.2425 33.0869 20.5812C33.4255 20.9199 33.5943 21.3385 33.5931 21.8371C33.5919 22.3357 33.4226 22.755 33.0851 23.0948C32.7476 23.4347 32.329 23.6034 31.8292 23.6011H23.0095V32.4207C23.0095 32.9205 22.8402 33.3397 22.5015 33.6784C22.1628 34.0171 21.7442 34.1858 21.2456 34.1846C20.747 34.1835 20.3284 34.0141 19.9897 33.6766C19.651 33.3391 19.4817 32.9205 19.4817 32.4207V23.6011Z"
                fill={colors.playpal["inactive-gray"]}
              />
            </Svg>
          </View>
        </View>

        {/* Text area - 25% height */}
        <View style={styles.textArea}>
          <Text
            style={[
              styles.cardText,
              {
                fontSize: textSize,
                color: colors.playpal["inactive-gray"],
              },
            ]}
          >
            create event
          </Text>
        </View>
      </View>
    );
  }

  if (type === "single") {
    return (
      <View style={styles.cardWrapper}>
        {/* Background */}
        <View
          style={[
            styles.cardBackground,
            { backgroundColor: colors.playpal["off-white"] },
          ]}
        />

        {/* Single image - 75% height */}
        {images[0] ? (
          <Image
            source={{ uri: images[0] }}
            style={styles.singleImage}
            resizeMode="cover"
            
          />
        ) : (
          <View style={[styles.singleImageFallback, { backgroundColor: colors.playpal["inactive-gray"] }]}>
            <Text style={[styles.cardText, { fontSize: textSize, color: colors.playpal.white }]}>
              No Image
            </Text>
          </View>
        )}

        {/* Text area - 25% height */}
        <View style={styles.textArea}>
          <Text
            style={[
              styles.cardText,
              {
                fontSize: textSize,
                color: colors.playpal.gray,
              },
            ]}
          >
            {status || 'No Status'}
          </Text>
        </View>
      </View>
    );
  }

  // Multiple type - Fixed layout calculations
  const displayImages = images.slice(0, 3);
  const hasAdditionalCount =
    additionalCount !== undefined && additionalCount > 0;

  return (
    <View style={styles.cardWrapper}>
      {/* Background */}
      <View
        style={[
          styles.cardBackground,
          { backgroundColor: colors.playpal["off-white"] },
        ]}
      />

      {/* Image grid area - 75% height */}
      <View style={styles.imageGridArea}>
        {displayImages.map((image, index) => {
          return (
            <Image
              key={index}
              source={{ uri: image }}
              style={[
                styles.gridImageBase,
                index === 0 && styles.gridImageTopLeft,
                index === 1 && styles.gridImageTopRight,
                index === 2 && styles.gridImageBottomLeft,
              ]}
              resizeMode="cover"

            />
          );
        })}



        {/* Additional count overlay */}
        {hasAdditionalCount && (
          <View style={styles.additionalCountContainer}>
            <Text
              style={[
                styles.cardText,
                {
                  fontSize: textSize,
                  color: colors.playpal.white,
                },
              ]}
            >
              +{additionalCount}
            </Text>
          </View>
        )}
      </View>

      {/* Text area - 25% height */}
      <View style={styles.textArea}>
        <Text
          style={[
            styles.cardText,
            {
              fontSize: textSize,
              color: colors.playpal.gray,
            },
          ]}
        >
          {status || 'No Status'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    aspectRatio: 3 / 4, // aspect-[3/4]
    position: "relative",
    minHeight: 120, // Ensure minimum height
  },
  cardBackground: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: borderRadius.lg, // rounded-lg
  },
  imageArea: {
    position: "absolute",
    left: 2, // left-[2px]
    top: 2, // top-[2px]
    right: 2, // Equivalent to w-[calc(100%-4px)]
    bottom: "25%", // Take up 75% by going to 25% from bottom
    borderRadius: borderRadius.md, // rounded-md
    justifyContent: "center",
    alignItems: "center",
  },
  createIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  singleImage: {
    position: "absolute",
    left: 2, // left-[2px]
    top: 2, // top-[2px]
    right: 2, // w-[calc(100%-4px)]
    bottom: "25%", // Take up 75% by going to 25% from bottom
    borderRadius: borderRadius.md, // rounded-md
  },
  singleImageFallback: {
    position: "absolute",
    left: 2, // left-[2px]
    top: 2, // top-[2px]
    right: 2, // w-[calc(100%-4px)]
    bottom: "25%", // Take up 75% by going to 25% from bottom
    borderRadius: borderRadius.md, // rounded-md
    justifyContent: "center",
    alignItems: "center",
  },
  imageGridArea: {
    position: "absolute",
    left: 2, // left-[2px]
    top: 2, // top-[2px]
    right: 2, // w-[calc(100%-4px)]
    bottom: "25%", // Take up 75% by going to 25% from bottom
  },
  gridImage: {
    position: "absolute",
    borderRadius: borderRadius.md, // rounded-md
  },
  gridImageBase: {
    position: "absolute",
    borderRadius: borderRadius.md, // rounded-md
  },
  gridImageTopLeft: {
    left: 0,
    top: 0,
    width: "48%", // Slightly less than 50% to account for spacing
    height: "48%",
  },
  gridImageTopRight: {
    right: 0,
    top: 0,
    width: "48%",
    height: "48%",
  },
  gridImageBottomLeft: {
    left: 0,
    bottom: 0,
    width: "48%",
    height: "48%",
  },

  additionalCountContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "48%",
    height: "48%",
    borderRadius: borderRadius.md, // rounded-md
    backgroundColor: colors.playpal["inactive-gray"],
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    position: "absolute",
    bottom: 0,
    left: 2, // left-[2px]
    right: 2, // w-[calc(100%-4px)]
    height: "25%", // h-[25%]
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontWeight: "bold" as const, // font-bold
    textAlign: "center", // text-center
    lineHeight: 16, // Use numeric value instead of 1
    fontFamily: typography.fontFamilies.bold || "System", // Add fallback
  },
});

export default PalCard;
