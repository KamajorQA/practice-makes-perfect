function TodoItem({ id, text, completed, removeTodo, toggleTodoCompleted }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span className="todoText">{text}</span>
      <span className="xMark" onClick={() => removeTodo(id)}>
        &#x2718;
      </span>
    </li>
  );
}

export default TodoItem;
