# Weeky Native

A modern task management application built with React Native and Expo.

## Features

- Task management with completion tracking
- Streak tracking for daily tasks
- Dark mode support
- Offline data persistence
- Error handling with fallback UI
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weeky-native.git
cd weeky-native
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run the app on Android
- `npm run ios` - Run the app on iOS
- `npm run web` - Run the app in web browser
- `npm test` - Run tests
- `npm run lint` - Run linter
- `npm run reset-project` - Reset project state

## Project Structure

```
weeky-native/
├── app/                 # Expo Router pages
├── src/
│   ├── components/     # Reusable components
│   ├── context/        # React Context providers
│   ├── screens/        # Screen components
│   └── store/          # State management
├── assets/             # Static assets
└── tests/              # Test files
```

## Testing

The project uses Jest and React Native Testing Library for testing. Run tests with:

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
