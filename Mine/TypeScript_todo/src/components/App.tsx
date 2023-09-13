import { useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

// function App(): React.ReactNode {
//   return <div />;
// }

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

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

  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
};

export { App };
