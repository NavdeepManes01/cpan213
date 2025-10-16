# Project Structure

This document explains the organization of the CPAN 213 React Native project.

## Folder Organization
src/
├── assets/           # Static files
│   ├── images/      # App images and icons
│   └── fonts/       # Custom fonts
├── components/       # Reusable UI components
│   ├── common/      # Shared components (Header, Buttons, etc.)
│   └── forms/       # Form-specific components
├── screens/          # Screen components
│   ├── Auth/        # Authentication screens
│   ├── Home/        # Home screen and related
│   └── Profile/     # User profile screens
├── navigation/       # Navigation configuration
├── services/         # API calls and external services
├── utils/            # Helper functions and utilities
├── constants/        # App constants (colors, styles, etc.)
├── hooks/            # Custom React hooks
├── context/          # React Context for state management
└── styles/           # Global styles and themes


## Key Configuration Files

- `.eslintrc.js` - Code linting rules
- `.prettierrc.js` - Code formatting rules
- `.vscode/` - VS Code settings and debug configurations
- `.env.*` - Environment-specific variables

## Development Scripts

### Basic Commands
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm start` - Start Metro bundler

### Code Quality
- `npm run lint` - Check code for issues
- `npm run lint:fix` - Automatically fix linting issues
- `npm run format` - Format code with Prettier

### Development
- `npm run dev:android` - Start development for Android
- `npm run dev:ios` - Start development for iOS
- `npm run clean` - Clean the project completely

## Environment Configuration

- **Development**: Uses `.env.development`
- **Production**: Uses `.env.production`
