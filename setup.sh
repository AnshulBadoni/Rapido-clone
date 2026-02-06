#!/bin/bash

# Create project structure
mkdir -p "app/(tabs)" components constants hooks assets/images assets/icons utils app/login app/booking app/ride app/profile

# Initialize package.json
cat <<EOF > package.json
{
  "name": "rapido-clone",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest --watchAll"
  },
  "dependencies": {
    "expo": "~51.0.0",
    "expo-constants": "~16.0.2",
    "expo-linking": "~6.3.1",
    "expo-router": "~3.5.0",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.1",
    "react-native-safe-area-context": "4.10.1",
    "react-native-screens": "3.31.1",
    "@expo/vector-icons": "^14.0.0",
    "expo-font": "~12.0.5",
    "react-native-maps": "1.14.0",
    "react-native-gesture-handler": "~2.16.1",
    "react-native-reanimated": "~3.10.1"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "typescript": "~5.3.3"
  },
  "private": true
}
EOF

# Create app.json
cat <<EOF > app.json
{
  "expo": {
    "name": "RapidoClone",
    "slug": "rapido-clone",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "rapido-clone",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
EOF

# Create tsconfig.json
cat <<EOF > tsconfig.json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true
  }
}
EOF

echo "Project structure created and dependencies configured."
