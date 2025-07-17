// Web-specific configuration for Builder.io compatibility
import { AppRegistry, Platform } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// Ensure proper sizing for web
if (Platform.OS === "web") {
  const style = document.createElement("style");
  style.textContent = `
    html, body, #root {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    * {
      box-sizing: border-box;
    }
  `;
  document.head.appendChild(style);
}

AppRegistry.registerComponent(appName, () => App);
