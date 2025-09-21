# Environment Setup Documentation

## System Specifications
- **Device Name:** HP Laptop
- **Processor:** 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz (3.00 GHz)
- **Installed RAM:** 8.00 GB (7.75 GB usable)
- **Operating System:** Windows 11 Home Single Language
- **OS Version:** 24H2 (Build 26100.6584)
- **System Type:** 64-bit operating system, x64-based processor
- **Storage:** 256GB SSD with ~65GB free and 1TB HDD with ~500GB free

## Software Versions Installed
- **Node.js:** v22.19.0
- **npm:** 11.6.0
- **React Native CLI:** @react-native-community/cli: 20.0.0
- **Android Studio:** Android Studio Narwhal | 2025.1.3 (Build #AI-251.26094.121.2513.14007798)
- **Java:** openjdk 17.0.16 2025-07-15 LTS (64-Bit Server VM Microsoft-11926163 (build 17.0.16+8-LTS, mixed mode, sharing))
- **Git:** 2.47.1.windows.2
- **Visual Studio Code:** 1.104.1
- **Android SDK:** 36.0.0

## Setup Steps Followed

1. **Install Node.js and npm**  
    - Download the latest LTS version from [nodejs.org](https://nodejs.org/).
    - Verify installation using `node -v` and `npm -v`.

2. **Install React Native CLI**  
    - Open a terminal and run:
      ```
      npm install -g @react-native-community/cli
      ```

3. **Install Android Studio**  
    - Download and install from [developer.android.com/studio](https://developer.android.com/studio).
    - During setup, install the Android SDK, Android SDK Platform Tools, and create a virtual device (emulator).

4. **Install Java JDK**  
    - Install OpenJDK 17 (or as required by React Native/Android Studio).
    - Set the `JAVA_HOME` environment variable to the JDK installation path.

5. **Install Visual Studio Code**  
    - Download and install from [code.visualstudio.com](https://code.visualstudio.com/).
    - Install recommended extensions such as ESLint and Prettier.

6. **Verify Environment Setup**  
    - Confirm all installations by running:
      ```
      node -v
      npm -v
      git --version
      java -version
      react-native --version
      ```
    - Launch Android Studio and ensure the emulator runs successfully.

7. **Configure Environment Variables**  
    - Ensure `JAVA_HOME`, `ANDROID_HOME`, and relevant SDK paths are set in your system environment variables.

8. **Create a New React Native Project**  
    - In your terminal, run:
      ```
      npx @react-native-community/cli@latest init newProject
      ```
    - Navigate into the project folder and run the app on the emulator:
      ```
      cd MyFirstApp
      npx @react-native-community/cli@latest run-android
      ```

9. **Test the App**  
    - Confirm the default React Native app launches in the Android emulator without errors.

## Deviations from Lab Instructions
- Project was named differently than in the lab (used `newProject` instead of `environmentTest`).
- Some environment variables were set manually due to system configuration.

## Time Taken for Each Major Step
| Step                                  | Time Taken |
|-------------------------------------- |------------|
| Node.js & npm Installation            | 10 min     |
| Android Studio & SDK Setup            | 25 min     |
| Java JDK Setup                        | 10 min     |
| Visual Studio Code Installation       | 5 min      |
| React Native CLI Installation         | 5 min      |
| Environment Variable Configuration    | 5 min      |
| Create & Run First React Native App   | 15 min     |
| **Total**                             | **75 min** |