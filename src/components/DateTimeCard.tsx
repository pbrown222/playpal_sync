import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography } from "../styles/theme";

interface DateTimeCardProps {
  className?: string;
}

const DateTimeCard: React.FC<DateTimeCardProps> = ({ className }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.calendarIcon}>
          <Svg width="48" height="48" viewBox="0 0 48 52" fill="none">
            <Path
              d="M43.5 51.7392H4.5C2.01 51.7392 0 49.5952 0 46.9392V8.5392C0 5.8832 2.01 3.7392 4.5 3.7392H43.5C45.99 3.7392 48 5.8832 48 8.5392V46.9392C48 49.5952 45.99 51.7392 43.5 51.7392ZM4.5 6.9392C3.66 6.9392 3 7.6432 3 8.5392V46.9392C3 47.8352 3.66 48.5392 4.5 48.5392H43.5C44.34 48.5392 45 47.8352 45 46.9392V8.5392C45 7.6432 44.34 6.9392 43.5 6.9392H4.5Z"
              fill="white"
            />
            <Path
              d="M13.5 13.4059C12.66 13.4059 12 12.7092 12 11.8225V2.32253C12 1.43586 12.66 0.739197 13.5 0.739197C14.34 0.739197 15 1.43586 15 2.32253V11.8225C15 12.7092 14.34 13.4059 13.5 13.4059ZM34.5 13.4059C33.66 13.4059 33 12.7092 33 11.8225V2.32253C33 1.43586 33.66 0.739197 34.5 0.739197C35.34 0.739197 36 1.43586 36 2.32253V11.8225C36 12.7092 35.34 13.4059 34.5 13.4059ZM46.5 19.7392H1.5C0.66 19.7392 0 19.0425 0 18.1559C0 17.2692 0.66 16.5725 1.5 16.5725H46.5C47.34 16.5725 48 17.2692 48 18.1559C48 19.0425 47.34 19.7392 46.5 19.7392Z"
              fill="white"
            />
          </Svg>
          <Text style={styles.dayText}>Wed</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.timeText}>06:30-07:30</Text>
        <Text style={styles.dateText}>23rd jul 2025</Text>
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
    backgroundColor: colors.playpal["inactive-gray"],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexShrink: 0,
  },
  calendarIcon: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    position: "absolute",
    top: 24,
    fontFamily: typography.fontFamilies.bold,
    color: colors.playpal.white,
    fontSize: 14,
    lineHeight: 16,
  },
  textContainer: {
    flex: 1,
    minWidth: 0,
    paddingRight: 8,
  },
  timeText: {
    fontFamily: typography.fontFamilies.bold,
    color: colors.playpal.gray,
    fontSize: 12,
    lineHeight: 16,
  },
  dateText: {
    fontFamily: typography.fontFamilies.regular,
    color: colors.playpal.gray,
    fontSize: 12,
    lineHeight: 24,
  },
});

export default DateTimeCard;
