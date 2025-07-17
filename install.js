#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Setting up PlayPal React Native App...\n");

function runCommand(command, description) {
  console.log(`📦 ${description}...`);
  try {
    execSync(command, { stdio: "inherit", cwd: __dirname });
    console.log(`✅ ${description} completed successfully!\n`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    return false;
  }
}

function checkNodeVersion() {
  try {
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split(".")[0]);

    if (majorVersion < 16) {
      console.error(
        "❌ Node.js version 16 or higher is required. Current version:",
        nodeVersion,
      );
      console.log("Please update Node.js: https://nodejs.org/");
      process.exit(1);
    }

    console.log("✅ Node.js version check passed:", nodeVersion);
  } catch (error) {
    console.error("❌ Could not determine Node.js version");
    process.exit(1);
  }
}

function cleanInstall() {
  console.log("🧹 Cleaning previous installation...");

  const pathsToClean = ["node_modules", "package-lock.json", "yarn.lock"];

  pathsToClean.forEach((pathToClean) => {
    const fullPath = path.join(__dirname, pathToClean);
    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`   Removed: ${pathToClean}`);
    }
  });

  console.log("✅ Cleanup completed!\n");
}

async function main() {
  try {
    // Check Node.js version
    checkNodeVersion();

    // Clean previous installation
    cleanInstall();

    // Check if Expo CLI is available
    try {
      execSync("expo --version", { stdio: "pipe" });
      console.log("✅ Expo CLI is available\n");
    } catch {
      console.log("📦 Installing Expo CLI globally...");
      if (!runCommand("npm install -g @expo/cli", "Installing Expo CLI")) {
        console.log("⚠️  Expo CLI installation failed, but continuing...\n");
      }
    }

    // Install dependencies with multiple fallback strategies
    const installCommands = [
      "npm install --legacy-peer-deps",
      "npm install --legacy-peer-deps --no-optional",
      "npm install --force",
    ];

    let installSuccess = false;

    for (const command of installCommands) {
      console.log(`🔄 Trying: ${command}`);

      if (runCommand(command, `Installing dependencies`)) {
        installSuccess = true;
        break;
      }

      console.log("⚠️  Command failed, trying next approach...\n");
    }

    if (!installSuccess) {
      console.error("❌ All installation attempts failed.");
      console.log("\n💡 Manual steps to try:");
      console.log("1. npm cache clean --force");
      console.log("2. rm -rf node_modules package-lock.json");
      console.log("3. npm install --legacy-peer-deps");
      process.exit(1);
    }

    console.log("\n✅ Setup completed successfully!");
    console.log("\n🎯 Next steps:");
    console.log("1. Start the development server: npm start");
    console.log("2. Open in simulator:");
    console.log("   - npm run ios     (iOS - Mac only)");
    console.log("   - npm run android (Android)");
    console.log("   - npm run web     (Web preview)");
    console.log("\n3. Use Expo Go app to scan QR code on your phone");
    console.log("\n📚 Check README.md for detailed documentation");
    console.log("🎉 Happy coding!");
  } catch (error) {
    console.error("❌ Setup failed:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
