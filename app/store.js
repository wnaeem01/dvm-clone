import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './stores/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer
  }
});
