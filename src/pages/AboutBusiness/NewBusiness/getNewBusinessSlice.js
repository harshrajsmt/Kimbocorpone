import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const businessActivity = createAsyncThunk( "selectActivity/businessActivity", async () => {
    return fetch("http://localhost:5000/selectValue").then((res) => 
    res.json()
 );
});

const getNewBusinessSlice = createSlice({
  name:"selectActivity",
  initialState:{
    selectActivity:[],
    loading:false,
  },
  extraReducers : {
    [businessActivity.pending]: (state, action) => {
      state.loading = true;
    },
    [businessActivity.fulfilled]: (state, action) => {
      state.loading = false;
      state.selectActivity = action.payload;
    },
    [businessActivity.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default getNewBusinessSlice.reducer;