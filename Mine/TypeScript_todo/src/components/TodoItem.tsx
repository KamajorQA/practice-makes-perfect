import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {}

const TodoItem = ({ id, title, completed }: ITodoItem) => {
  return (
    <div>
      <input type="checkbox" checked={completed}></input>
      {title}
      <button>X</button>
    </div>
  );
};

export { TodoItem };
