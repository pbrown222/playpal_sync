// Exact match for React Tailwind theme colors
export const colors = {
  // Playpal brand colors - exact from tailwind.config.ts
  playpal: {
    "off-white": "#F4F6F0",
    gray: "#474B69",
    white: "#FFFFFF",
    "inactive-gray": "#B0B1B8",
    green: "#8DDE77",
    blue: "#15BDFB",
    orange: "#FF8C00",
    "gradient-end": "#98DC86",
  },

  // Gradient colors
  gradientStart: "#15BDFB", // 0%
  gradientEnd: "#98DC86", // 76.6%

  // System colors
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

// Typography - matching Inter font setup from React
export const typography = {
  fontFamily: "Inter_400Regular",
  fontSizes: {
    xs: 12, // text-xs
    sm: 14, // text-sm
    base: 16, // text-base
    lg: 18, // text-lg
    xl: 20, // text-xl
    "2xl": 24, // text-2xl
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  fontFamilies: {
    regular: "Inter_400Regular",
    bold: "Inter_700Bold",
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

// Spacing system - matching Tailwind spacing
export const spacing = {
  px: 1,
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16, // px-4
  5: 20,
  6: 24,
  7: 28,
  8: 32, // space-y-8
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
};

// Border radius - matching Tailwind
export const borderRadius = {
  none: 0,
  sm: 2,
  DEFAULT: 4,
  md: 6,
  lg: 8, // rounded-lg
  xl: 12,
  "2xl": 16,
  "3xl": 24, // rounded-3xl
  full: 9999, // rounded-full
};

// Shadows - matching React shadow styles
export const shadows = {
  // shadow-[0px_10px_22px_0px_rgba(176,177,184,0.50)]
  searchBar: {
    shadowColor: "#B0B1B8",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 22,
    elevation: 10,
  },
  // shadow-[0px_4px_21.4px_7px_rgba(0,0,0,0.05)]
  bottomNav: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 21.4,
    elevation: 7,
  },
};

// Breakpoints - matching React responsive breakpoints
export const breakpoints = {
  xs: 320, // Very small phones (e.g. iPhone SE)
  sm: 375, // Small phones (e.g. iPhone X/12, Pixel)
  md: 480, // Large phones & small tablets
  lg: 640, // Mid-size tablets / landscape phones
  xl: 992, // Large tablets & small laptops
  "2xl": 1400, // Larger desktops
};

// Standard gradient configuration (same as original React version)
export const getGradientConfig = () => {
  return {
    colors: [colors.gradientStart, colors.gradientEnd] as const,
    locations: [0, 0.766] as const, // 76.6% exact from original CSS
  };
};
