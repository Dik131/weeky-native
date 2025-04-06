import { Text, TextProps } from 'react-native';
import { useTheme } from '../context/ThemeContext';

type ThemedTextProps = TextProps & {
  type?: 'title' | 'link';
};

export function ThemedText({ style, type, ...props }: ThemedTextProps) {
  const { isDark } = useTheme();
  
  const textStyle = {
    color: isDark ? '#fff' : '#000',
    ...(type === 'title' && { fontSize: 20, fontWeight: 'bold' }),
    ...(type === 'link' && { color: isDark ? '#0ea5e9' : '#0284c7' }),
  };

  return <Text style={[textStyle, style]} {...props} />;
} 