import TodoListItem from '../TodoListItem/TodoListItem';
import './todoList.css';

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map((item) => {
        const { id, ...itemProps } = { ...item };
        return (
          <li key={id} className="list-group-item">
            <TodoListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
