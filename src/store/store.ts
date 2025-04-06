import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';
import { isToday, isYesterday, format } from 'date-fns';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  streak: number;
  history: Record<string, boolean>; // ключ — дата YYYY-MM-DD
  deleted?: boolean;
}

type State = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  resetDaily: () => void;
  removeTask: (id: string) => void;
  restoreTask: (id: string) => void;
};

export const useTaskStore = create<State>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (title) => {
        const date = format(new Date(), 'yyyy-MM-dd');
        const newTask: Task = {
          id: Date.now().toString(),
          title,
          completed: false,
          streak: 0,
          history: { [date]: false },
        };
        set({ tasks: [...get().tasks, newTask] });
      },
      toggleTask: (id) => {
        const date = format(new Date(), 'yyyy-MM-dd');
        set({
          tasks: get().tasks.map((task) => {
            if (task.id !== id) return task;

            const completed = !task.completed;
            const lastDate = Object.keys(task.history).slice(-1)[0];
            const wasYesterday = isYesterday(new Date(lastDate));

            const updatedStreak = completed
              ? wasYesterday || task.streak === 0
                ? task.streak + 1
                : 1
              : task.streak;

            return {
              ...task,
              completed,
              streak: updatedStreak,
              history: {
                ...task.history,
                [date]: completed,
              },
            };
          }),
        });
      },
      resetDaily: () => {
        const today = format(new Date(), 'yyyy-MM-dd');
        set({
          tasks: get().tasks.map((task) => ({
            ...task,
            completed: false,
            history: { ...task.history, [today]: false },
          })),
        });
      },
      removeTask: (id) =>
        set({ tasks: get().tasks.map((t) => (t.id === id ? { ...t, deleted: true } : t)) }),
      restoreTask: (id) =>
        set({ tasks: get().tasks.map((t) => (t.id === id ? { ...t, deleted: false } : t)) }),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);