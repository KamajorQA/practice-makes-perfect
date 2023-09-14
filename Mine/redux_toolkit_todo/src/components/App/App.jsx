import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import LogoSpin from '../LogoSpin/LogoSpin';
import TodoList from '../TodoList/TodoList';
import AddForm from '../AddForm/AddForm';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div className="app">
      <h2>Todo List</h2>
      <LogoSpin />
      <AddForm text={text} handleInputText={setText} handleAddItem={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
