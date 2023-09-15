import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatus } from '../../store/todoSlice';

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  const deleteTask = () => dispatch(deleteTodo(id));
  const toggleCompleted = () => dispatch(toggleStatus(id));

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <span className="todoText">{title}</span>
      <span className="xMark" onClick={deleteTask}>
        &#x2718;
      </span>
    </li>
  );
}

export default TodoItem;
