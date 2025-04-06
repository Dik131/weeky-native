import { render, fireEvent } from '@testing-library/react-native';
import TodoScreen from '../TodoScreen';
import { useTaskStore } from '@/store/store';

// Mock the store
jest.mock('../../store', () => ({
  useTaskStore: jest.fn(),
}));

describe('TodoScreen', () => {
  const mockTasks = [
    { id: '1', title: 'Test Task 1', completed: false, streak: 0, history: {} },
    { id: '2', title: 'Test Task 2', completed: true, streak: 1, history: {} },
  ];

  beforeEach(() => {
    (useTaskStore as jest.Mock).mockImplementation(() => ({
      tasks: mockTasks,
      addTask: jest.fn(),
      toggleTask: jest.fn(),
      removeTask: jest.fn(),
    }));
  });

  it('renders correctly', () => {
    const { getByText } = render(<TodoScreen />);
    expect(getByText('Мои задачи')).toBeTruthy();
  });

  it('adds a new task', () => {
    const addTask = jest.fn();
    (useTaskStore as jest.Mock).mockImplementation(() => ({
      tasks: mockTasks,
      addTask,
      toggleTask: jest.fn(),
      removeTask: jest.fn(),
    }));

    const { getByPlaceholderText, getByText } = render(<TodoScreen />);
    const input = getByPlaceholderText('Новая задача');
    const addButton = getByText('+');

    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);

    expect(addTask).toHaveBeenCalledWith('New Task');
  });

  it('toggles task completion', () => {
    const toggleTask = jest.fn();
    (useTaskStore as jest.Mock).mockImplementation(() => ({
      tasks: mockTasks,
      addTask: jest.fn(),
      toggleTask,
      removeTask: jest.fn(),
    }));

    const { getByText } = render(<TodoScreen />);
    const task = getByText('Test Task 1');
    fireEvent.press(task);

    expect(toggleTask).toHaveBeenCalledWith('1');
  });
}); 