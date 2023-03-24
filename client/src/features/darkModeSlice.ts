import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: false
  },
  reducers: {
    setDarkMode: state => {
      state.value = !state.value
    }
  }
})


export const setDarkMode = darkModeSlice.actions


export default darkModeSlice.reducer