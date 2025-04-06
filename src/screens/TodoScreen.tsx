import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useTaskStore } from '../store';
import { useState } from 'react';
import clsx from 'clsx';

export default function TodoScreen() {
  const { tasks, addTask, toggleTask, removeTask } = useTaskStore();
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      addTask(title.trim());
      setTitle('');
    }
  };

  return (
    <View className="flex-1 bg-white dark:bg-black p-4">
      <Text className="text-2xl font-bold text-black dark:text-white mb-4">Мои задачи</Text>
      <View className="flex-row mb-4">
        <TextInput
          className="flex-1 border p-2 rounded-lg dark:text-white dark:border-gray-700"
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
        {tasks.filter(t => !t.deleted).map((task) => (
          <View
            key={task.id}
            className={clsx(
              'flex-row items-center justify-between p-2 mb-2 rounded-lg',
              task.completed ? 'bg-green-200 dark:bg-green-800' : 'bg-gray-200 dark:bg-gray-700'
            )}
          >
            <Pressable onPress={() => toggleTask(task.id)} className="flex-1">
              <Text className="text-lg dark:text-white">{task.title}</Text>
              <Text className="text-xs text-gray-600 dark:text-gray-400">
                Подряд: {task.streak} дн.
              </Text>
            </Pressable>
            <Pressable onPress={() => removeTask(task.id)}>
              <Text className="text-red-600 dark:text-red-400 font-bold text-lg">🗑</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}