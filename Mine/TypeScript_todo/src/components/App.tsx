import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

// function App(): React.ReactNode {
//   return <div />;
// }

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputTodoRef = useRef<HTMLInputElement>(null);

  const commonClasses = 'border-2 rounded border-sky-700';

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handlePressEnter: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (!!value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);

      setValue('');
    }
  };

  const removeTodo = (id: number): void => {
    const updTodos = todos.filter((item) => item.id !== id);
    setTodos(updTodos);
  };

  const toggleTodo = (id: number): void => {
    const updTodos = todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setTodos(updTodos);
  };

  useEffect(() => {
    inputTodoRef.current?.focus();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-orange-200 gap-2">
      <div>
        <input
          value={value}
          onChange={handleInputChange}
          onKeyDown={handlePressEnter}
          ref={inputTodoRef}
          className={`${commonClasses} bg-transparent mr-3 outline-emerald-700`}
        />
        <button
          onClick={addTodo}
          className={`${commonClasses} 'h-full px-4 w-32`}
        >
          Add
        </button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export { App };
