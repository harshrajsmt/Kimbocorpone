import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Capitals  = createAsyncThunk( "CapitalData /Capitals", async () => {
    return fetch("http://localhost:5000/ShareCapital").then((res) => 
    res.json()
    
 );
});

const getCapitalSlice = createSlice({
    name:"CapitalData ",
    initialState:{
      userData:[],
      loading:false,
    },
    extraReducers : {
      [Capitals.pending]: (state, action) => {
        state.loading = true;
      },
      [Capitals.fulfilled]: (state, action) => {
        state.loading = false;
        state.CapitalData = action.payload;
      },
      [Capitals.rejected]: (state, action) => {
        state.loading = false;
      },
    },
  });
  
  export default getCapitalSlice.reducer;
