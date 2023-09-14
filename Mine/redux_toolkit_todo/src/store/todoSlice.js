import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log('state from addTodo', state);
      console.log('action from addTodo >', action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {},
    toggleTodoCompleted(state, action) {},
  },
  name: 'todos',
});

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

export const { todoReducer } = todoSlice.reducer;
