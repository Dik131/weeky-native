import { View, ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';

export default function TabBarBackground({ style, ...props }: ViewProps) {
  return (
    <BlurView intensity={80} style={[{ position: 'absolute', bottom: 0, left: 0, right: 0 }, style]} {...props} />
  );
} 