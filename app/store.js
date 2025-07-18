import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './stores/sidebarSlice';
import userReducer from './stores/userSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user:userReducer,
  }
});
