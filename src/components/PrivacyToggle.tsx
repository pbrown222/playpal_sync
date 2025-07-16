import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface PrivacyToggleProps {
  initialPrivate?: boolean;
  onChange?: (isPrivate: boolean) => void;
}

const PrivacyToggle: React.FC<PrivacyToggleProps> = ({
  initialPrivate = true,
  onChange,
}) => {
  const [isPrivate, setIsPrivate] = useState(initialPrivate);

  const handleToggle = () => {
    const newValue = !isPrivate;
    setIsPrivate(newValue);
    onChange?.(newValue);
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.container}>
      <View style={styles.toggleContainer}>
        {/* Left Eye Icon (Public) */}
        <View style={styles.eyeIconContainer}>
          <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
            <Path
              d="M9.75 12.5C9.75 11.9033 9.98705 11.331 10.409 10.909C10.831 10.4871 11.4033 10.25 12 10.25C12.5967 10.25 13.169 10.4871 13.591 10.909C14.0129 11.331 14.25 11.9033 14.25 12.5C14.25 13.0967 14.0129 13.669 13.591 14.091C13.169 14.5129 12.5967 14.75 12 14.75C11.4033 14.75 10.831 14.5129 10.409 14.091C9.98705 13.669 9.75 13.0967 9.75 12.5Z"
              fill={colors.playpal["inactive-gray"]}
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12.5C2 14.14 2.425 14.691 3.275 15.796C4.972 18 7.818 20.5 12 20.5C16.182 20.5 19.028 18 20.725 15.796C21.575 14.692 22 14.139 22 12.5C22 10.86 21.575 10.309 20.725 9.204C19.028 7 16.182 4.5 12 4.5C7.818 4.5 4.972 7 3.275 9.204C2.425 10.31 2 10.861 2 12.5ZM12 8.75C11.0054 8.75 10.0516 9.14509 9.34835 9.84835C8.64509 10.5516 8.25 11.5054 8.25 12.5C8.25 13.4946 8.64509 14.4484 9.34835 15.1517C10.0516 15.8549 11.0054 16.25 12 16.25C12.9946 16.25 13.9484 15.8549 14.6517 15.1517C15.3549 14.4484 15.75 13.4946 15.75 12.5C15.75 11.5054 15.3549 10.5516 14.6517 9.84835C13.9484 9.14509 12.9946 8.75 12 8.75Z"
              fill={colors.playpal["inactive-gray"]}
            />
          </Svg>
        </View>

        {/* Blue Circle with Eye Icon (Private) */}
        <View style={styles.blueCircleContainer}>
          <View style={styles.blueCircle} />
          <View style={styles.eyeClosedIcon}>
            <Svg width="21" height="21" viewBox="0 0 22 22" fill="none">
              <Path
                d="M1.41855 5.37308C1.52526 5.3274 1.63992 5.30318 1.75599 5.30182C1.87206 5.30046 1.98725 5.32197 2.09501 5.36514C2.20276 5.4083 2.30095 5.47227 2.38397 5.5534C2.467 5.63452 2.53322 5.7312 2.57888 5.83792L1.76674 6.18611L2.57976 5.83792L2.58241 5.84499L2.60097 5.88476L2.68404 6.0562C2.76004 6.2082 2.87757 6.4309 3.03753 6.70043C3.4593 7.40898 3.95392 8.07154 4.51334 8.67732C4.68101 8.85771 4.85492 9.0322 5.03474 9.20048C6.34441 10.428 8.1746 11.4884 10.6039 11.4884C11.5776 11.4929 12.5432 11.3124 13.4495 10.9564C14.5339 10.5296 15.4414 9.88713 16.1855 9.19076C17.1807 8.24648 17.9987 7.13159 18.6007 5.8989L18.6246 5.84764L18.629 5.83792C18.7235 5.62584 18.8977 5.45948 19.114 5.37481C19.3302 5.29014 19.571 5.29396 19.7844 5.38546C19.9978 5.47695 20.1667 5.64876 20.2544 5.86374C20.3421 6.07873 20.3417 6.3196 20.2533 6.53429L20.2515 6.53871L20.248 6.54578L20.2383 6.56876L20.2029 6.64564C20.0066 7.05443 19.788 7.45211 19.5481 7.8369C19.1064 8.54648 18.6002 9.21386 18.036 9.83057L18.7404 10.5349C18.9062 10.7006 18.9994 10.9254 18.9995 11.1598C18.9996 11.3942 18.9065 11.6191 18.7408 11.7849C18.5751 11.9507 18.3503 12.0439 18.1159 12.044C17.8815 12.0441 17.6566 11.9511 17.4908 11.7854L16.7485 11.043C16.2261 11.4653 15.6647 11.8369 15.072 12.153L15.7631 13.2152C15.8283 13.3125 15.8735 13.4217 15.8962 13.5365C15.9188 13.6514 15.9184 13.7696 15.895 13.8843C15.8715 13.999 15.8255 14.1079 15.7597 14.2047C15.6938 14.3014 15.6093 14.3842 15.5112 14.448C15.4131 14.5119 15.3033 14.5556 15.1882 14.5767C15.073 14.5977 14.9548 14.5957 14.8404 14.5707C14.7261 14.5457 14.6178 14.4983 14.5219 14.4311C14.4261 14.3639 14.3445 14.2783 14.282 14.1794L13.4106 12.8414C12.8106 13.0252 12.1699 13.1551 11.4877 13.2161V14.5815C11.4877 14.8158 11.3946 15.0406 11.2288 15.2063C11.0631 15.3721 10.8383 15.4652 10.6039 15.4652C10.3696 15.4652 10.1448 15.3721 9.97906 15.2063C9.81333 15.0406 9.72022 14.8158 9.72022 14.5815V13.217C9.03534 13.1551 8.39464 13.0252 7.79636 12.8414L6.9259 14.1794C6.7952 14.3689 6.59569 14.5 6.36982 14.5446C6.14396 14.5893 5.90957 14.5441 5.71656 14.4185C5.52355 14.293 5.38715 14.0971 5.33639 13.8725C5.28563 13.648 5.32452 13.4124 5.44478 13.2161L6.13585 12.153C5.51725 11.826 4.95874 11.446 4.45943 11.0422L3.71711 11.7845C3.55044 11.9455 3.32721 12.0345 3.0955 12.0325C2.86379 12.0305 2.64214 11.9376 2.47829 11.7737C2.31444 11.6099 2.2215 11.3882 2.21949 11.1565C2.21748 10.9248 2.30655 10.7016 2.46753 10.5349L3.17185 9.83057C2.54666 9.14673 1.99293 8.40083 1.51929 7.60448C1.33067 7.28636 1.1564 6.95994 0.997015 6.6262L0.967852 6.56257L0.959015 6.54401L0.957248 6.53783L0.956364 6.53606C0.953713 6.53606 0.953713 6.53429 1.76674 6.18611L0.954596 6.53518C0.908748 6.42848 0.88438 6.31379 0.882886 6.19766C0.881392 6.08154 0.902801 5.96625 0.94589 5.85841C0.988979 5.75056 1.0529 5.65227 1.134 5.56915C1.21511 5.48602 1.3118 5.41881 1.41855 5.37308Z"
                fill="white"
              />
            </Svg>
          </View>
        </View>

        {/* Private label */}
        <Text style={styles.privateLabel}>Private</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.playpal.blue,
    backgroundColor: colors.playpal.white,
    gap: 18,
  },
  eyeIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  blueCircleContainer: {
    position: "relative",
    width: 33,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
  },
  blueCircle: {
    position: "absolute",
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: colors.playpal.blue,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  eyeClosedIcon: {
    position: "absolute",
    top: 6,
    left: 6,
    width: 21,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  privateLabel: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 26,
    letterSpacing: -0.24,
    opacity: 0.95,
  },
});

export default PrivacyToggle;
