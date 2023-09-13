import { IHandleTodo, ITodo } from '../types/data';

interface ITodoItem extends ITodo, IHandleTodo {}

const TodoItem = ({
  id,
  title,
  completed,
  removeTodo,
  toggleTodo,
}: ITodoItem) => {
  return (
    <div className="border-b-2 flex gap-5 justify-between border-sky-700">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      ></input>
      {title}
      <button onClick={() => removeTodo(id)}>&#x2718;</button>
    </div>
  );
};

export { TodoItem };
