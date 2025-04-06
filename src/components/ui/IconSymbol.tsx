import { Text, TextProps } from 'react-native';

export function IconSymbol({ style, ...props }: TextProps) {
  return <Text style={[{ fontSize: 24 }, style]} {...props} />;
} 