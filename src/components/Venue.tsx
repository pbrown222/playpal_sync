import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface VenueProps {
  title: string;
  onVenueChange?: (venue: string) => void;
  onLocationClick?: () => void;
}

const Venue: React.FC<VenueProps> = ({
  title,
  onVenueChange,
  onLocationClick,
}) => {
  const [venueText, setVenueText] = useState("");

  const handleVenueChange = (text: string) => {
    setVenueText(text);
    onVenueChange?.(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Location / Venue</Text>
          <Text style={styles.subtitle}>Set your preferred venue.</Text>
        </View>
        <TouchableOpacity
          onPress={onLocationClick}
          style={styles.locationButton}
        >
          <Svg width="25" height="31" viewBox="0 0 25 31" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.47797 13.1911C5.47797 11.3539 6.20779 9.59195 7.50687 8.29287C8.80595 6.99379 10.5679 6.26398 12.4051 6.26398C14.2422 6.26398 16.0042 6.99379 17.3032 8.29287C18.6023 9.59195 19.3321 11.3539 19.3321 13.1911C19.3321 15.0282 18.6023 16.7902 17.3032 18.0892C16.0042 19.3883 14.2422 20.1181 12.4051 20.1181C10.5679 20.1181 8.80595 19.3883 7.50687 18.0892C6.20779 16.7902 5.47797 15.0282 5.47797 13.1911ZM12.4051 8.45148C11.148 8.45148 9.94251 8.95082 9.05367 9.83967C8.16482 10.7285 7.66547 11.934 7.66547 13.1911C7.66547 14.4481 8.16482 15.6536 9.05367 16.5425C9.94251 17.4313 11.148 17.9306 12.4051 17.9306C13.6621 17.9306 14.8676 17.4313 15.7564 16.5425C16.6453 15.6536 17.1446 14.4481 17.1446 13.1911C17.1446 11.934 16.6453 10.7285 15.7564 9.83967C14.8676 8.95082 13.6621 8.45148 12.4051 8.45148Z"
              fill="#45CDFF"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.0442244 11.5242C0.294148 8.50104 1.67145 5.68231 3.90283 3.62733C6.13421 1.57236 9.05658 0.431329 12.0901 0.430664H12.7201C15.7535 0.431329 18.6759 1.57236 20.9073 3.62733C23.1387 5.68231 24.516 8.50104 24.7659 11.5242C25.0439 14.892 24.0034 18.2361 21.8638 20.8517L14.874 29.399C14.5749 29.7648 14.1982 30.0596 13.7712 30.262C13.3442 30.4644 12.8776 30.5694 12.4051 30.5694C11.9325 30.5694 11.4659 30.4644 11.0389 30.262C10.6119 30.0596 10.2352 29.7648 9.9361 29.399L2.94631 20.8517C0.806691 18.2361 -0.233782 14.892 0.0442244 11.5242ZM12.0901 2.61816C9.60596 2.61921 7.21299 3.5539 5.38582 5.23682C3.55865 6.91974 2.43077 9.22794 2.22589 11.7036C1.99443 14.5063 2.86027 17.2895 4.64089 19.4663L11.6307 28.015C11.7246 28.13 11.843 28.2227 11.9772 28.2864C12.1114 28.35 12.258 28.383 12.4065 28.383C12.555 28.383 12.7017 28.35 12.8359 28.2864C12.97 28.2227 13.0884 28.13 13.1824 28.015L20.1721 19.4663C21.9517 17.2891 22.8165 14.506 22.5842 11.7036C22.3793 9.22769 21.2512 6.91928 19.4238 5.23632C17.5963 3.55337 15.203 2.61885 12.7186 2.61816H12.0901Z"
              fill="#45CDFF"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={venueText}
          onChangeText={handleVenueChange}
          placeholder="Venue / Address"
          placeholderTextColor={colors.playpal["inactive-gray"]}
        />
        <TouchableOpacity style={styles.inputIcon}>
          <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <Path
              d="M15.268 7.57921H14.3296C14.207 6.30299 13.6441 5.10921 12.7375 4.20264C11.831 3.29606 10.6372 2.73317 9.36097 2.61053V1.67215C9.36097 1.53787 9.30762 1.40908 9.21267 1.31413C9.11772 1.21918 8.98893 1.16583 8.85465 1.16583C8.72037 1.16583 8.59158 1.21918 8.49663 1.31413C8.40168 1.40908 8.34833 1.53787 8.34833 1.67215V2.61053C7.0777 2.7393 5.89114 3.30504 4.99115 4.21119C4.09115 5.11733 3.53352 6.30773 3.41341 7.57921H2.47503C2.40854 7.57921 2.3427 7.5923 2.28127 7.61775C2.21984 7.64319 2.16403 7.68049 2.11701 7.7275C2.06999 7.77452 2.0327 7.83034 2.00725 7.89176C1.98181 7.95319 1.96871 8.01903 1.96871 8.08553C1.96871 8.15202 1.98181 8.21785 2.00725 8.27928C2.0327 8.34071 2.06999 8.39653 2.11701 8.44355C2.16403 8.49056 2.21984 8.52786 2.28127 8.5533C2.3427 8.57875 2.40854 8.59184 2.47503 8.59184H3.41341C3.53605 9.86806 4.09894 11.0618 5.00551 11.9684C5.91209 12.875 7.10587 13.4379 8.38209 13.5605V14.4989C8.38209 14.6332 8.43543 14.762 8.53038 14.8569C8.62534 14.9519 8.75412 15.0052 8.8884 15.0052C9.02269 15.0052 9.15147 14.9519 9.24643 14.8569C9.34138 14.762 9.39472 14.6332 9.39472 14.4989V13.5605C10.6705 13.4366 11.8635 12.8733 12.7699 11.967C13.6762 11.0607 14.2395 9.86759 14.3634 8.59184H15.3018C15.3683 8.59184 15.4341 8.57875 15.4955 8.5533C15.557 8.52786 15.6128 8.49056 15.6598 8.44355C15.7068 8.39653 15.7441 8.34071 15.7696 8.27928C15.795 8.21785 15.8081 8.15202 15.8081 8.08553C15.8081 8.01903 15.795 7.95319 15.7696 7.89176C15.7441 7.83034 15.7068 7.77452 15.6598 7.7275C15.6128 7.68049 15.557 7.64319 15.4955 7.61775C15.4341 7.5923 15.3683 7.57921 15.3018 7.57921H15.268ZM8.85465 12.5681C7.96807 12.5681 7.10141 12.3052 6.36424 11.8127C5.62708 11.3201 5.05254 10.62 4.71326 9.80095C4.37398 8.98186 4.28521 8.08055 4.45817 7.21101C4.63113 6.34147 5.05806 5.54274 5.68497 4.91584C6.31187 4.28894 7.11059 3.86201 7.98014 3.68905C8.84968 3.51608 9.75098 3.60485 10.5701 3.94413C11.3892 4.28341 12.0892 4.85796 12.5818 5.59512C13.0744 6.33228 13.3373 7.19895 13.3373 8.08553C13.3373 9.27501 12.8652 10.4159 12.0247 11.2576C11.1843 12.0993 10.0441 12.5731 8.85465 12.5749V12.5681Z"
              fill="#15BDFB"
            />
            <Path
              d="M11.9146 8.09227C11.9146 8.69874 11.7346 9.29158 11.3976 9.79575C11.0605 10.2999 10.5814 10.6927 10.021 10.9245C9.46053 11.1563 8.84394 11.2166 8.24922 11.0978C7.6545 10.979 7.10839 10.6864 6.68003 10.2571C6.25166 9.82778 5.96029 9.28103 5.84279 8.68606C5.7253 8.09108 5.78696 7.47461 6.01997 6.91469C6.25298 6.35477 6.64687 5.87656 7.15178 5.5406C7.65669 5.20463 8.24992 5.02602 8.85639 5.02735C9.25856 5.02735 9.65679 5.10668 10.0283 5.26078C10.3997 5.41489 10.7372 5.64076 11.0212 5.92545C11.3053 6.21015 11.5304 6.54807 11.6837 6.91989C11.837 7.2917 11.9154 7.6901 11.9146 8.09227Z"
              fill="#15BDFB"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.playpal.white,
    borderRadius: 8,
    padding: 20,
    shadowColor: colors.playpal["inactive-gray"],
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 20,
    color: colors.playpal.gray,
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 16.8,
    marginTop: 1,
  },
  locationButton: {
    padding: 0,
  },
  inputContainer: {
    position: "relative",
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(71, 75, 105, 0.95)",
    backgroundColor: colors.playpal.white,
    justifyContent: "center",
    paddingHorizontal: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  input: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 14,
    color: colors.playpal["inactive-gray"],
    lineHeight: 19.6,
    paddingRight: 40,
  },
  inputIcon: {
    position: "absolute",
    right: 11,
    top: "50%",
    marginTop: -8.5,
  },
});

export default Venue;
