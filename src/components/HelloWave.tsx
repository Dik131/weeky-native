import { Text, TextProps } from 'react-native';
import Animated, { useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export function HelloWave({ style, ...props }: TextProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: withRepeat(withTiming('30deg', { duration: 2000 }), -1, true) }],
  }));

  return (
    <Animated.Text style={[animatedStyle, style]} {...props}>
      👋
    </Animated.Text>
  );
} 