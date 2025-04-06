import { Pressable, PressableProps } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

type ExternalLinkProps = PressableProps & {
  href: string;
};

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  const handlePress = () => {
    WebBrowser.openBrowserAsync(href);
  };

  return (
    <Pressable onPress={handlePress} {...props}>
      {children}
    </Pressable>
  );
} 