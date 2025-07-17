# PlayPal Mobile Setup Guide

## Automated Setup Solutions

This project includes multiple automated setup solutions to handle dependency conflicts gracefully:

### 🚀 Quick Setup Options

#### Option 1: NPM Script (Recommended)

```bash
npm run setup
```

#### Option 2: Automated Cross-Platform Script

```bash
node install.js
```

#### Option 3: Shell Script (Unix/Mac/Linux)

```bash
./setup.sh
```

### 🛠️ Configuration Files

The following configuration files ensure consistent dependency resolution:

#### `.npmrc`

- Enables `legacy-peer-deps=true` by default
- Disables funding messages
- Sets moderate audit level

#### `package.json`

- Added `overrides` and `resolutions` for React version conflicts
- Includes `setup` and `clean-install` scripts
- Added `postinstall` hook for success confirmation

#### `.yarnrc`

- Yarn-specific configuration for alternative package manager
- Ignores platform and engine warnings
- Extended network timeout

### 🔧 Manual Troubleshooting

If automated setup fails, try these manual steps:

1. **Clear everything and reinstall:**

   ```bash
   npm run clean-install
   ```

2. **Force clean cache:**

   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

3. **Alternative installation methods:**
   ```bash
   npm install --legacy-peer-deps --no-optional
   npm install --force
   ```

### 📋 Dependency Conflict Resolution

Common issues and their solutions:

#### React Version Conflicts

- **Problem**: Multiple React versions causing peer dependency warnings
- **Solution**: `overrides` and `resolutions` in package.json lock React to v19.0.0

#### Expo/React Native Compatibility

- **Problem**: Version mismatches between Expo SDK and React Native
- **Solution**: `.npmrc` with `legacy-peer-deps=true` allows flexible resolution

#### Node.js Version Requirements

- **Problem**: Incompatible Node.js versions
- **Solution**: `.nvmrc` specifies Node 18, and `install.js` checks version requirements

### 🎯 Verification Steps

After setup, verify everything works:

1. **Check installation:**

   ```bash
   npm list --depth=0
   ```

2. **Start development server:**

   ```bash
   npm start
   ```

3. **Test platform builds:**
   ```bash
   npm run web
   npm run ios     # Mac only
   npm run android
   ```

### 🚨 Common Error Solutions

#### `ERESOLVE unable to resolve dependency tree`

- Run: `npm install --legacy-peer-deps`
- Or: `npm run clean-install`

#### `Expo CLI not found`

- Run: `npm install -g @expo/cli`
- Or use the automated scripts which handle this

#### `Metro bundler issues`

- Run: `npx expo start -c` (clear cache)
- Or: `npm run clean-install`

### 📦 Project Scripts

Available npm scripts:

- `npm run setup` - Install dependencies
- `npm run clean-install` - Clean and reinstall everything
- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser

### 🔄 Continuous Integration

For CI/CD environments, use:

```bash
npm ci --legacy-peer-deps
```

Or ensure your CI configuration includes the `.npmrc` file for automatic legacy peer deps handling.

### 💡 Best Practices

1. Always use the automated setup scripts
2. Keep `.npmrc` file for consistent dependency resolution
3. Use `npm run clean-install` when switching branches
4. Don't commit `node_modules` or `package-lock.json` to version control
5. Use the same Node.js version specified in `.nvmrc`

### 🆘 Getting Help

If you continue to experience setup issues:

1. Check that Node.js version matches `.nvmrc`
2. Ensure you have the latest npm: `npm install -g npm@latest`
3. Try the cross-platform setup script: `node install.js`
4. Check for platform-specific requirements in the main README.md
