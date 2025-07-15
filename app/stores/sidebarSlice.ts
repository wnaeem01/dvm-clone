import { createSlice } from '@reduxjs/toolkit';

import { getCategories } from "../api/sidebar";

const Categories=await getCategories();

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { value: false },
  reducers: {
    toggleVal: (state) => { 
      state.value = !state.value
     },
  }
});

export const { toggleVal } = sidebarSlice.actions;
export default sidebarSlice.reducer;
