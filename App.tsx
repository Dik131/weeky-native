import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  const scheme = useColorScheme();
  return (
    <>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <TodoScreen />
    </>
  );
}