# PlayPal Mobile - React Native App

This is the React Native version of the PlayPal web application, converted to work on iOS and Android devices.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

#### Automatic Setup (Recommended)

Run the automated setup script:

```bash
# Cross-platform setup
node install.js

# Or use the shell script (Unix/Mac/Linux)
./setup.sh
```

#### Manual Setup

1. Install dependencies with legacy peer deps support:

```bash
npm install --legacy-peer-deps
```

If you encounter issues, try:

```bash
# Clean install
npm run clean-install

# Or manual cleanup
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

2. Start the development server:

```bash
npm start
```

4. Run on specific platforms:

```bash
# iOS (requires Mac)
npm run ios

# Android
npm run android

# Web (for testing)
npm run web
```

## 📱 App Structure

### Screens

- **Index** - Landing screen (redirects to Pals)
- **Home** - Main dashboard
- **Pals** - Friends and social features
- **Venues** - Location and venue management
- **Gear** - Equipment and sports gear
- **Chat** - Messaging and conversations
- **EventCreate** - Create new events
- **EventDetail** - View event details

### Key Components

- **Box** - Reusable container component
- **Schedule** - Interactive schedule picker with edit modes
- **BottomNavigation** - Tab navigation
- **EventSportLevel** - Sport and skill level selection
- **Venue** - Location selection
- **PriceCard** - Event pricing
- **GearCard** - Equipment management
- **PalsCard** - Friend invitations
- **PrivacyToggle** - Public/private event toggle

### Theme System

- **Colors** - Consistent color palette matching web version
- **Typography** - Font sizes and weights
- **Spacing** - Consistent spacing system
- **Shadows** - Platform-appropriate shadows
- **Border Radius** - Rounded corner system

## 🎨 Design Features

### Maintained from Web Version

- **Color Scheme** - PlayPal blue (#15BDFB) and gradient backgrounds
- **Layout Structure** - Cards, spacing, and component hierarchy
- **Functionality** - All interactive features preserved
- **Responsiveness** - Optimized for mobile screens

### Mobile-Specific Enhancements

- **Touch Interactions** - Optimized for touch input
- **Native Navigation** - React Navigation for smooth transitions
- **Platform Optimization** - iOS and Android specific styling
- **Performance** - React Native performance optimizations

## 🔧 Customization

### Adding New Screens

1. Create screen component in `src/screens/`
2. Add route to `App.tsx`
3. Update navigation types if using TypeScript

### Modifying Theme

Edit `src/styles/theme.ts` to change:

- Colors
- Typography
- Spacing
- Shadows

### Adding Components

Create new components in `src/components/` following the existing pattern with proper styling and TypeScript interfaces.

## 📦 Dependencies

### Core

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Navigation library
- **React Query** - Data fetching

### UI/UX

- **Expo Linear Gradient** - Gradient backgrounds
- **React Native SVG** - Vector graphics
- **React Native Gesture Handler** - Touch interactions
- **React Native Reanimated** - Smooth animations

## 🚀 Deployment

### Build for Production

```bash
# Build for both platforms
expo build

# Platform specific
expo build:ios
expo build:android
```

### Publishing to App Stores

Follow Expo's documentation for app store deployment:

- [iOS App Store](https://docs.expo.dev/distribution/app-stores/#ios)
- [Google Play Store](https://docs.expo.dev/distribution/app-stores/#android)

## 🔄 Migration Notes

### From Web to Mobile

- **CSS to StyleSheet** - All Tailwind classes converted to React Native StyleSheet
- **HTML to React Native** - div → View, p → Text, etc.
- **Navigation** - React Router → React Navigation
- **Touch Events** - onClick → onPress
- **Responsive Design** - Flexbox-based responsive layouts
- **Icons** - SVGs replaced with emoji/icon components for simplicity

### Preserved Features

- ✅ Complete Schedule component with all three states
- ✅ Event creation flow
- ✅ Navigation between screens
- ✅ Component styling and layout
- ✅ Interactive elements and state management
- ✅ Color scheme and design consistency

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler errors** - Clear cache: `expo start -c`
2. **Simulator issues** - Restart simulator
3. **Navigation errors** - Check screen names match route definitions
4. **Styling issues** - Verify StyleSheet syntax vs CSS

### Development Tips

- Use Expo DevTools for debugging
- Test on both iOS and Android simulators
- Use React Native Debugger for advanced debugging
- Check platform-specific styling with Platform.OS

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/latest)
