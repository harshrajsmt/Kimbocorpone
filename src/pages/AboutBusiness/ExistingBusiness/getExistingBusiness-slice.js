import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const selectOption = createAsyncThunk( "selectValue/selectOption", async () => {
    return fetch("http://localhost:5000/selectValue").then((res) => 
    res.json()
 );
});

const getExistingBusinessSlice = createSlice({
  name:"selectValue",
  initialState:{
    selectValue:[],
    loading:false,
  },
  extraReducers : {
    [selectOption.pending]: (state, action) => {
      state.loading = true;
    },
    [selectOption.fulfilled]: (state, action) => {
      state.loading = false;
      state.selectValue = action.payload;
    },
    [selectOption.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default getExistingBusinessSlice.reducer;