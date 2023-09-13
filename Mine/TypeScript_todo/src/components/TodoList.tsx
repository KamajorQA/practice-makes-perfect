import { ITodo } from '../types/data';
import { TodoItem } from './TodoItem';

interface ITodoListProps {
  items: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </div>
  );
};

export { TodoList };
