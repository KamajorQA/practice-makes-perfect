import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';

const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
