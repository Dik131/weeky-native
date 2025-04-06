import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <View className="flex-1 justify-center items-center p-4 bg-white dark:bg-black">
          <Text className="text-xl font-bold mb-4 text-black dark:text-white">
            Что-то пошло не так
          </Text>
          <Text className="text-sm mb-4 text-gray-600 dark:text-gray-400">
            {this.state.error?.message || 'Произошла ошибка'}
          </Text>
          <Pressable
            onPress={() => {
              this.setState({ hasError: false, error: null });
            }}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            <Text className="text-white font-bold">Попробовать снова</Text>
          </Pressable>
        </View>
      );
    }

    return this.props.children;
  }
} 