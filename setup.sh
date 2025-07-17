#!/bin/bash

echo "🚀 Setting up PlayPal React Native App..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if Expo CLI is installed
if ! command -v expo &> /dev/null; then
    echo "📦 Installing Expo CLI..."
    npm install -g @expo/cli
else
    echo "✅ Expo CLI is already installed"
fi

# Navigate to project directory
cd "$(dirname "$0")"

# Clean previous installations if they exist
if [ -d "node_modules" ]; then
    echo "🧹 Cleaning previous installation..."
    rm -rf node_modules package-lock.json
fi

# Install dependencies with legacy peer deps
echo "📦 Installing dependencies with legacy peer deps support..."
npm install --legacy-peer-deps

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup completed successfully!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Start the development server:"
    echo "   npm start"
    echo ""
    echo "2. Open in simulator:"
    echo "   npm run ios     # for iOS (Mac only)"
    echo "   npm run android # for Android"
    echo "   npm run web     # for web preview"
    echo ""
    echo "3. Use Expo Go app on your phone to scan QR code"
    echo ""
    echo "📚 Check README.md for detailed documentation"
    echo "📋 Check CONVERSION_GUIDE.md for conversion details"
    echo ""
    echo "🔧 If you encounter dependency issues later, run:"
    echo "   npm run clean-install"
    echo ""
    echo "Happy coding! 🎉"
else
    echo "❌ Installation failed. Trying alternative approach..."
    echo "🔄 Attempting clean install with legacy peer deps..."
    
    # Try alternative installation method
    npm cache clean --force 2>/dev/null || true
    npm install --legacy-peer-deps --no-optional
    
    if [ $? -eq 0 ]; then
        echo "✅ Alternative installation successful!"
    else
        echo "❌ Installation failed. Please check the errors above."
        echo "💡 Try running: npm install --legacy-peer-deps manually"
        exit 1
    fi
fi
