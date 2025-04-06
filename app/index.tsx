import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useTaskStore, Task } from '@/store/store';
import { useState } from 'react';
import clsx from 'clsx';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useTheme } from '@/context/ThemeContext';

export default function TodoScreen() {
  const { tasks, addTask, toggleTask, removeTask } = useTaskStore();
  const [title, setTitle] = useState('');
  const { isDark } = useTheme();

  const handleAdd = () => {
    if (title.trim()) {
      addTask(title.trim());
      setTitle('');
    }
  };

  return (
    <ErrorBoundary>
      <View className={`flex-1 ${isDark ? 'bg-black' : 'bg-white'} p-4`}>
        <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-4`}>
          Мои задачи
        </Text>
        <View className="flex-row mb-4">
          <TextInput
            className={`flex-1 border p-2 rounded-lg ${
              isDark ? 'text-white border-gray-700' : 'text-black border-gray-300'
            }`}
            placeholder="Новая задача"
            placeholderTextColor="#999"
            value={title}
            onChangeText={setTitle}
          />
          <Pressable onPress={handleAdd} className="bg-blue-500 px-4 py-2 ml-2 rounded-lg">
            <Text className="text-white font-bold">+</Text>
          </Pressable>
        </View>
        <ScrollView>
          {tasks.filter((t: Task) => !t.deleted).map((task: Task) => (
            <View
              key={task.id}
              className={clsx(
                'flex-row items-center justify-between p-2 mb-2 rounded-lg',
                task.completed
                  ? isDark
                    ? 'bg-green-800'
                    : 'bg-green-200'
                  : isDark
                  ? 'bg-gray-700'
                  : 'bg-gray-200'
              )}
            >
              <Pressable onPress={() => toggleTask(task.id)} className="flex-1">
                <Text className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>
                  {task.title}
                </Text>
                <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Подряд: {task.streak} дн.
                </Text>
              </Pressable>
              <Pressable onPress={() => removeTask(task.id)}>
                <Text className={`${isDark ? 'text-red-400' : 'text-red-600'} font-bold text-lg`}>
                  🗑
                </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </ErrorBoundary>
  );
} 