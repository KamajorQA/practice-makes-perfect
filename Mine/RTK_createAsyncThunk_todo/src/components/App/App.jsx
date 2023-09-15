import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from '../../store/todoSlice';
import LogoSpin from '../LogoSpin/LogoSpin';
import TodoList from '../TodoList/TodoList';
import AddForm from '../AddForm/AddForm';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todoReducer);

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="app">
      {status === 'loading' && <h1>Loading...</h1>}
      {!!error && <h1>An error occured: {error} </h1>}
      <h2>Todo List</h2>
      <LogoSpin />
      <AddForm text={text} handleInputText={setText} handleAddItem={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
