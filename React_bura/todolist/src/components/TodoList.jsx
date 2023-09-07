import TodoListItem from './TodoListItem.jsx';

const TodoList = () => {
  const todos = ['Water flowers', 'Plant seeds', 'Dig grave'];
  return (
    <ul>
      {todos.map((el, i) => {
        return (
          <li key={i}>
            <TodoListItem text={el} />;
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
