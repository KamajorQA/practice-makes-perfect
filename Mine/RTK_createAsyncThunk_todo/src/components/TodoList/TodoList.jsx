import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <ul>
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
}

export default TodoList;
