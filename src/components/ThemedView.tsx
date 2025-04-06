import { View, ViewProps } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export function ThemedView({ style, ...props }: ViewProps) {
  const { isDark } = useTheme();
  return <View style={[{ backgroundColor: isDark ? '#000' : '#fff' }, style]} {...props} />;
} 