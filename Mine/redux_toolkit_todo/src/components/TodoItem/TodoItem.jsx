import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../../store/todoSlice';

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  const deleteTask = () => dispatch(removeTodo({ id }));
  const toggleCompleted = () => dispatch(toggleTodoCompleted({ id }));

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <span className="todoText">{text}</span>
      <span className="xMark" onClick={deleteTask}>
        &#x2718;
      </span>
    </li>
  );
}

export default TodoItem;
