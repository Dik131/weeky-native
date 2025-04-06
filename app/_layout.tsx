import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@/context/ThemeContext';

export default function RootLayout() {
  const scheme = useColorScheme();

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: scheme === 'dark' ? '#000' : '#fff',
          },
          headerTintColor: scheme === 'dark' ? '#fff' : '#000',
          contentStyle: {
            backgroundColor: scheme === 'dark' ? '#000' : '#fff',
          },
        }}
      />
    </ThemeProvider>
  );
}
