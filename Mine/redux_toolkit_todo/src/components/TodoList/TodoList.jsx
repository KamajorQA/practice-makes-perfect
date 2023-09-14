import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos, removeTodo, toggleTodoCompleted }) {
  return (
    <ul>
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
          removeTodo={removeTodo}
          toggleTodoCompleted={toggleTodoCompleted}
        />
      ))}
    </ul>
  );
}

export default TodoList;
