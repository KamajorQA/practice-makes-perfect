import { useState } from 'react';
import LogoSpin from '../LogoSpin/LogoSpin';
import TodoItem from '../TodoItem/TodoItem';
import './App.css';
import TodoList from '../TodoList/TodoList';
import AddForm from '../AddForm/AddForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length !== 0) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);

      setText('');
    }
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((el) => el.id !== todoId));
  };

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map((item) => {
        if (item.id !== todoId) {
          return item;
        }

        return {
          ...item,
          completed: !item.completed,
        };
      })
    );
  };

  return (
    <div className="app">
      <LogoSpin />
      <AddForm text={text} handleInputText={setText} handleAddItem={addTodo} />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    </div>
  );
}

export default App;
