import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${baseUrl}?_limit=10`);
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const repsonse = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });

      if (!repsonse.ok) {
        throw new Error(`Can't delete task. Server error.`);
      }

      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatus = createAsyncThunk(
  'todos/toggleStatus',
  async function (id, { rejectWithValue, dispatch, getState }) {
    const stateInStore = getState();
    const allTodos = stateInStore.todoReducer.todos;
    const currentTodo = allTodos.find((el) => el.id === id);

    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !currentTodo.completed,
        }),
      });

      if (!response.ok) {
        throw new Error(`Can't toggle status. Server error.`);
      }

      dispatch(toggleTodoCompleted({ id: id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const createdTodo = {
        userId: 1,
        title: text,
        completed: false,
      };

      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createdTodo),
      });

      if (!response.ok) {
        throw new Error(`Can't toggle status. Server error.`);
      }

      const data = await response.json();

      console.log(data);
      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((el) => el.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find((el) => el.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: setError,
    [deleteTodo.rejected]: setError,
    [toggleStatus.rejected]: setError,
  },
});

const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
