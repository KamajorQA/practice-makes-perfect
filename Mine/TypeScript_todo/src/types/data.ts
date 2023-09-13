export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IHandleTodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
