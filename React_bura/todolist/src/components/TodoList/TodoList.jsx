import TodoListItem from '../TodoListItem/TodoListItem';
import './todoList.css';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map((item) => {
        const { id, ...itemProps } = { ...item };
        return (
          <li key={id} className="list-group-item">
            <TodoListItem
              {...itemProps}
              handleDeleteItem={() => onDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
