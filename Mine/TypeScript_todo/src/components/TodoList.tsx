import { IHandleTodo, ITodo } from '../types/data';
import { TodoItem } from './TodoItem';

interface ITodoListProps extends IHandleTodo {
  items: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;
  return (
    <div className="max-w-xl">
      {items.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export { TodoList };
