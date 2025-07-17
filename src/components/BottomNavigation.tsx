import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import {
  colors,
  typography,
  borderRadius,
  shadows,
  spacing,
  breakpoints,
} from "../styles/theme";

// Props from React Navigation tabBar
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

interface NavItem {
  id: string;
  label: string;
  screen: string;
  icon: React.ReactNode;
}

const BottomNavigation: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const screenWidth = Dimensions.get('window').width;

  // Responsive values (only for container dimensions and spacing)
  const getResponsiveNavItemWidth = () => {
    if (screenWidth >= breakpoints["2xl"]) return 75;
    if (screenWidth >= breakpoints.xl) return 70;
    if (screenWidth >= breakpoints.lg) return 65;
    if (screenWidth >= breakpoints.md) return 63;
    return 58;
  };
  const getResponsiveNavItemHeight = () => {
    if (screenWidth >= breakpoints["2xl"]) return 60;
    if (screenWidth >= breakpoints.xl) return 58;
    if (screenWidth >= breakpoints.lg) return 55;
    if (screenWidth >= breakpoints.md) return 53;
    return 50;
  };
  const getResponsivePadding = () => {
    if (screenWidth >= breakpoints.xl) return 12;
    if (screenWidth >= breakpoints.lg) return 10;
    if (screenWidth >= breakpoints.md) return 8;
    return 6;
  };

  // MODIFIED: Adjusting gap responsiveness
  const getResponsiveGap = () => {
    if (screenWidth >= breakpoints.xl) return 30; // Farther away for xl
    if (screenWidth >= breakpoints.lg) return 25; // Farther away for lg
    if (screenWidth >= breakpoints.md) return 20; // Farther away for md
    return 5; // Closer for xs (default/smaller screens)
  };

  const getResponsiveBottomPadding = () => {
    if (screenWidth >= breakpoints.xl) return 35;
    if (screenWidth >= breakpoints.lg) return 32;
    if (screenWidth >= breakpoints.md) return 30;
    return 25;
  };
  const getResponsiveTopPadding = () => {
    if (screenWidth >= breakpoints.xl) return 32;
    if (screenWidth >= breakpoints.lg) return 30;
    if (screenWidth >= breakpoints.md) return 29;
    return 26;
  };

  const navItemWidth = getResponsiveNavItemWidth();
  const navItemHeight = getResponsiveNavItemHeight();
  const horizontalPadding = getResponsivePadding();
  const gap = getResponsiveGap();
  const bottomPadding = getResponsiveBottomPadding();
  const topPadding = getResponsiveTopPadding();

  // Icon renderers (accept isActive: boolean directly)
  const PalsIcon = (isActive: boolean) => (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 18V17C7 15.6739 7.52678 14.4021 8.46447 13.4645C9.40215 12.5268 10.6739 12 12 12M12 12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V18M12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM1 18V17C1 16.2044 1.31607 15.4413 1.87868 14.8787C2.44129 14.3161 3.20435 14 4 14M4 14C4.53043 14 5.03914 13.7893 5.41421 13.4142C5.78929 13.0391 6 12.5304 6 12C6 11.4696 5.78929 10.9609 5.41421 10.5858C5.03914 10.2107 4.53043 10 4 10C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14ZM23 18V17C23 16.2044 22.6839 15.4413 22.1213 14.8787C21.5587 14.3161 20.7956 14 20 14M20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10C19.4696 10 18.9609 10.2107 18.5858 10.5858C18.2107 10.9609 18 11.4696 18 12C18 12.5304 18.2107 13.0391 18.5858 13.4142C18.9609 13.7893 19.4696 14 20 14Z"
        stroke={isActive ? colors.playpal.gray : colors.playpal["inactive-gray"]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
  const VenuesIcon = (isActive: boolean) => (
    <View style={styles.venuesIconContainer}>
      <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2C5.13401 2 2 5.13401 2 9C2 11.2061 3.33607 13.268 5.20492 14.8876L8.6463 17.8702C8.8493 18.0461 9.1507 18.0461 9.3537 17.8702L12.7951 14.8876C14.6639 13.268 16 11.2061 16 9C16 5.13401 12.866 2 9 2ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 12.0264 16.1902 14.5918 14.1049 16.399L10.6635 19.3816C9.7088 20.209 8.2912 20.209 7.3365 19.3816L3.89505 16.399C1.80977 14.5918 0 12.0264 0 9Z"
          fill={isActive ? colors.playpal.gray : colors.playpal["inactive-gray"]}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2C4 3.1046 3.1046 4 2 4C0.8954 4 0 3.1046 0 2C0 0.89543 0.8954 0 2 0C3.1046 0 4 0.89543 4 2Z"
          fill={isActive ? colors.playpal.gray : colors.playpal["inactive-gray"]}
          transform="translate(7, 7)"
        />
      </Svg>
    </View>
  );
  const HomeIcon = (isActive: boolean) => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.97287 0.000372222C9.79518 0.00597341 9.62409 0.063881 9.48459 0.165634L1.58854 5.90771C0.586376 6.63674 0 7.75074 0 8.92849V18.718C0 19.4172 0.631337 20 1.38889 20H6.94444C7.702 20 8.33333 19.4172 8.33333 18.718V13.5899C8.33333 13.4386 8.4472 13.3335 8.61111 13.3335H11.3889C11.5528 13.3335 11.6667 13.4386 11.6667 13.5899V18.718C11.6667 19.4172 12.298 20 13.0556 20H18.6111C19.3687 20 20 19.4172 20 18.718V8.92849C20 7.75074 19.4136 6.63674 18.4115 5.90771L10.5154 0.165634C10.3613 0.053264 10.1692 -0.00526422 9.97287 0.000372222ZM10 1.74914L17.3806 7.11663C17.9829 7.55476 18.3333 8.22115 18.3333 8.92849V18.4616H13.3333V13.5899C13.3333 12.6079 12.4528 11.795 11.3889 11.795H8.61111C7.54725 11.795 6.66667 12.6079 6.66667 13.5899V18.4616H1.66667V8.92849C1.66667 8.22115 2.01708 7.55476 2.61936 7.11663L10 1.74914Z"
        fill={isActive ? colors.playpal.gray : colors.playpal["inactive-gray"]}
      />
    </Svg>
  );
  const GearIcon = (isActive: boolean) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7Z"
        stroke={isActive ? colors.playpal.gray : colors.playpal["inactive-gray"]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 9V5.5C8.5 5.04037 8.59053 4.58525 8.76642 4.16061C8.94231 3.73597 9.20012 3.35013 9.52513 3.02513C9.85013 2.70012 10.236 2.44231 10.6606 2.26642C11.0852 2.09053 11.5404 2 12 2C12.4596 2 12.9148 2.09053 13.3394 2.26642C13.764 2.44231 14.1499 2.70012 14.4749 3.02513C14.7999 3.35013 15.0577 3.73597 15.2336 4.16061C15.4095 4.58525 15.5 5.04037 15.5 5.5V9"
        stroke={isActive ? colors.playpal.gray : colors.playpal["inactive-gray"]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
  const ChatIcon = (isActive: boolean) => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.33286 0.295814C9.07863 -0.0986087 10.8918 -0.0986006 12.6376 0.295814L13.0409 0.386634C16.2828 1.11909 18.8287 3.61107 19.6102 6.82023L19.704 7.20695C20.098 8.82524 20.0981 10.5135 19.704 12.1318C18.8732 15.5425 15.8001 17.9941 12.2997 17.9941L11.2323 17.9931L11.1776 18.1152C10.4283 19.6669 8.61494 20.3713 6.96665 19.8066L6.78403 19.7392L6.35532 19.5605C3.34484 18.2349 1.10331 15.5665 0.324074 12.3671C-0.106199 10.6003 -0.108537 8.74557 0.320167 6.98527C1.12649 3.67498 3.75243 1.10522 7.09653 0.349525L7.33286 0.295814ZM12.1971 2.24699C10.7416 1.91814 9.22974 1.91819 7.77427 2.24699L7.53794 2.29972C4.93243 2.88838 2.88967 4.88793 2.26353 7.4589C1.91074 8.90746 1.91276 10.437 2.26743 11.8935C2.92022 14.5739 4.84203 16.7989 7.40708 17.8339L7.53208 17.8837C8.29225 18.1905 9.12044 17.8702 9.40903 17.1737L9.47349 17.0351C9.79797 16.4015 10.4544 15.9942 11.1756 15.9941H12.2997C14.8718 15.9941 17.1467 14.1788 17.7606 11.6581C18.079 10.3507 18.079 8.987 17.7606 7.6796L17.6668 7.29386C17.0654 4.82427 15.1033 2.90332 12.6004 2.33781L12.1971 2.24699ZM10.2342 9.99992C10.6571 10.0002 10.9999 10.4477 10.9999 10.9999C10.9999 11.5520 10.6571 11.9997 10.2342 11.9999H5.76548C5.3426 11.9997 4.99986 11.5520 4.99986 10.9999C4.99986 10.4477 5.3426 10.0002 5.76548 9.99992H10.2342ZM14.1043 6.99992C14.5990 6.99992 14.9999 7.44763 14.9999 7.99992C14.9999 8.55220 14.5990 8.99991 14.1043 8.99992H5.89536C5.40078 8.99991 4.99986 8.55219 4.99986 7.99992C4.99986 7.44763 5.40078 6.99992 5.89536 6.99992H14.1043Z"
        fill={isActive ? colors.playpal.gray : colors.playpal["inactive-gray"]}
      />
    </Svg>
  );

  // Tab order and mapping
  const tabOrder = ["Pals", "Venues", "Home", "Gear", "Chat"];
  const iconMap: Record<string, (isActive: boolean) => React.ReactNode> = {
    Pals: PalsIcon,
    Venues: VenuesIcon,
    Home: HomeIcon,
    Gear: GearIcon,
    Chat: ChatIcon,
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[
          styles.background,
          {
            paddingHorizontal: horizontalPadding,
            paddingBottom: bottomPadding,
            paddingTop: topPadding,
          }
        ]}>
          <View style={[
            styles.navContainer,
            { gap: gap }
          ]}>
            {state.routes.map((route, idx) => {
              const isActive = state.index === idx;
              let label =
                descriptors[route.key].options.tabBarLabel ||
                descriptors[route.key].options.title ||
                route.name;
              if (typeof label !== "string") label = route.name;
              const Icon = iconMap[route.name];
              const isHome = route.name === "Home";
              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={() => {
                    if (!isActive) {
                      navigation.navigate(route.name);
                    }
                  }}
                  style={[
                    styles.navItem,
                    {
                      width: navItemWidth,
                      height: navItemHeight,
                    },
                    isHome && styles.homeNavItem,
                  ]}
                  accessibilityRole="button"
                  accessibilityState={isActive ? { selected: true } : {}}
                  accessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
                  testID={descriptors[route.key].options.tabBarTestID}
                >
                  <View style={styles.navContent}>
                    <View style={styles.iconContainer}>{Icon && Icon(isActive)}</View>
                    <Text
                      style={[
                        styles.navLabel,
                        isActive ? styles.activeNavLabel : styles.inactiveNavLabel,
                      ]}
                    >
                      {label}
                    </Text>
                    {isActive && <View style={styles.activeIndicator} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  wrapper: {
    width: "100%",
  },
  background: {
    backgroundColor: colors.playpal.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...shadows.bottomNav,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  navItem: {
    position: "relative",
  },
  homeNavItem: {
    marginTop: -1,
  },
  navContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  venuesIconContainer: {
    width: 24,
    height: 24,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  navLabel: {
    fontSize: typography.fontSizes.xs,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: "center",
    fontFamily: typography.fontFamilies.regular,
  },
  activeNavLabel: {
    color: colors.playpal.gray,
  },
  inactiveNavLabel: {
    color: colors.playpal["inactive-gray"],
  },
  activeIndicator: {
    position: "absolute",
    bottom: -6,
    width: 4,
    height: 4,
    backgroundColor: colors.playpal.green,
    borderRadius: borderRadius.full,
  },
});

export default BottomNavigation;