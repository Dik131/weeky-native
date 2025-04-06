import { ScrollView, ScrollViewProps } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

type ParallaxScrollViewProps = ScrollViewProps & {
  headerBackgroundColor?: { light: string; dark: string };
  headerImage?: React.ReactNode;
};

export default function ParallaxScrollView({ children, ...props }: ParallaxScrollViewProps) {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      {...props}
    >
      {children}
    </Animated.ScrollView>
  );
} 