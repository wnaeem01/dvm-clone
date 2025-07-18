import { createSlice } from '@reduxjs/toolkit';

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
