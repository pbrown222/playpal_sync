import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface SportAndLevelProps {
  className?: string;
}

const SportAndLevel: React.FC<SportAndLevelProps> = ({ className }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Svg width="48" height="48" viewBox="0 0 47 48" fill="none">
          <Path
            d="M23.5 0.748474C18.8506 0.748474 14.3056 2.12718 10.4398 4.71025C6.57393 7.29333 3.56087 10.9647 1.78162 15.2602C0.00237262 19.5557 -0.46316 24.2824 0.443894 28.8424C1.35095 33.4025 3.58985 37.5912 6.87748 40.8788C10.1651 44.1664 14.3538 46.4053 18.9139 47.3124C23.4739 48.2195 28.2006 47.7539 32.4961 45.9747C36.7915 44.1954 40.463 41.1824 43.046 37.3165C45.6291 33.4507 47.0078 28.9057 47.0078 24.2563C47.0005 18.0239 44.5214 12.0488 40.1145 7.64184C35.7075 3.23485 29.7324 0.755793 23.5 0.748474ZM42.7142 32.0669C39.427 34.3525 35.5485 35.6379 31.5469 35.7679C27.5453 35.898 23.5915 34.8671 20.1628 32.7998L24.2974 25.6391H44.1961C44.0501 27.8473 43.5498 30.0176 42.7142 32.0669ZM14.3504 5.64363C16.3342 4.66528 18.4625 4.0124 20.6537 3.71C24.2772 5.41364 27.3301 8.12962 29.444 11.5301C31.5579 14.9306 32.6424 18.8702 32.5666 22.8735H24.2974L14.3504 5.64363ZM44.1961 22.8735H35.3323C35.3934 19.1545 34.5723 15.474 32.9362 12.1337C31.3001 8.79342 28.8957 5.88845 25.9199 3.65699C30.7282 4.22851 35.1858 6.46146 38.5227 9.97009C41.8596 13.4787 43.8663 18.0426 44.1961 22.8735ZM11.9581 7.03105L16.3854 14.6987C13.1345 16.5058 10.358 19.0574 8.28332 22.1444C6.20862 25.2314 4.89479 28.766 4.44946 32.4587C2.5329 28.0108 2.23453 23.0321 3.60616 18.3872C4.9778 13.7422 7.93281 9.72432 11.9581 7.03105ZM7.13673 36.9759C6.80417 32.9889 7.63175 28.9908 9.51972 25.4635C11.4077 21.9362 14.2755 19.0302 17.7775 17.0956L21.9029 24.2563L11.9581 41.4815C10.1223 40.2447 8.49488 38.7238 7.13673 36.9759ZM23.5 44.9985C20.3269 45.0018 17.1959 44.2731 14.3504 42.8689L18.78 35.1966C21.9685 37.1078 25.5642 38.2365 29.2729 38.4905C32.9815 38.7445 36.6976 38.1164 40.1168 36.6578C38.1881 39.2463 35.6814 41.3484 32.7964 42.7964C29.9114 44.2445 26.728 44.9986 23.5 44.9985Z"
            fill="white"
          />
        </Svg>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.sportText}>Volleyball</Text>
        <Text style={styles.levelText}>Beginner</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flex: 1,
    minWidth: 0,
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
  sportText: {
    fontFamily: typography.fontFamilies.bold,
    color: colors.playpal.gray,
    fontSize: 12,
    lineHeight: 16,
  },
  levelText: {
    fontFamily: typography.fontFamilies.regular,
    color: colors.playpal.gray,
    fontSize: 12,
    lineHeight: 24,
  },
});

export default SportAndLevel;
