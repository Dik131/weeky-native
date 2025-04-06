import { View, ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

type CollapsibleProps = ViewProps & {
  isOpen: boolean;
};

export function Collapsible({ isOpen, children, style, ...props }: CollapsibleProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(isOpen ? 'auto' : 0),
    opacity: withTiming(isOpen ? 1 : 0),
  }));

  return (
    <Animated.View style={[animatedStyle, style]} {...props}>
      {children}
    </Animated.View>
  );
} 