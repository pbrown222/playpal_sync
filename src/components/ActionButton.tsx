import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface ActionButtonProps {
  text: string;
  variant?: "join" | "create";
  onPress?: () => void;
  disabled?: boolean;
  style?: object;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  variant = "join",
  onPress,
  disabled = false,
  style = {},
}) => {
  const getButtonStyles = () => {
    if (variant === "create") {
      return {
        borderWidth: 1,
        borderColor: colors.playpal.green,
        backgroundColor: colors.playpal.white,
      };
    }
    return {
      backgroundColor: colors.playpal.white,
    };
  };

  const getTextColor = () => {
    return colors.playpal.green;
  };

  const getContainerStyles = () => {
    return {};
  };

  return (
    <View style={getContainerStyles()}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          getButtonStyles(),
          disabled && styles.disabled,
          style,
        ]}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, { color: getTextColor() }]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: borderRadius.lg, // rounded-lg
    paddingVertical: 12, // py-3
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: '700', // font-bold
    fontSize: typography.fontSizes.base, // text-base
    fontFamily: typography.fontFamilies.bold,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default ActionButton;
