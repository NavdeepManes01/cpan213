# Contact Manager App

A React Native mobile application for managing contacts, built using React Native CLI.

## Prerequisites

- Node.js
- Ruby (for iOS development)
- Xcode (for iOS development)
- Android Studio (for Android development)
- [React Native Development Environment](https://reactnative.dev/docs/environment-setup)

## Installation

1. Clone the repository:

- git clone [repository-url]
- cd ContactManagerApp


2. Install JavaScript dependencies:

- npm install
# OR
- yarn install


3. Install iOS dependencies (macOS only):

- bundle install
- cd ios && bundle exec pod install
- cd ..


## Running the App

### Start Metro Server

- npm start
# OR
- yarn start


### Run on iOS (macOS only)

- npm run ios
# OR
- yarn ios


### Run on Android

- npm run android
# OR
- yarn android


## Development

- The main app code is in `App.tsx`
- Components are located in `src/components/`
- Screens are located in `src/screens/`
- Styles are located in `src/styles/`
- Utilities are located in `src/utils/`

## Project Structure
```
src/
  ├── components/    # Reusable components
  ├── data/         # Data management
  ├── screens/      # Application screens
  ├── styles/       # Styling files
  └── utils/        # Utility functions
```

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run ios` - Run the iOS app
- `npm run android` - Run the Android app
- `npm test` - Run tests

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed
2. Clean build folders:
   - iOS: `cd ios && rm -rf build/`
   - Android: `cd android && ./gradlew clean`
3. Reset Metro cache: `npm start -- --reset-cache`

For more troubleshooting, visit the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting)