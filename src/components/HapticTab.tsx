import { Pressable, PressableProps } from 'react-native';
import * as Haptics from 'expo-haptics';

export function HapticTab({ onPress, ...props }: PressableProps) {
  const handlePress = (e: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.(e);
  };

  return <Pressable onPress={handlePress} {...props} />;
} 