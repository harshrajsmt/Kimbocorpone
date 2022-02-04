import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Finance  = createAsyncThunk( "FinanceData /Finance", async () => {
    return fetch("http://localhost:5000/FinanceData").then((res) => 
    res.json()
    
 );
});

const getFinanceDataSlice = createSlice({
    name:"FinanceData ",
    initialState:{
      FinanceData:[],
      loading:false,
    },
    extraReducers : {
      [Finance.pending]: (state, action) => {
        state.loading = true;
      },
      [Finance.fulfilled]: (state, action) => {
        state.loading = false;
        state.FinanceData = action.payload;
      },
      [Finance.rejected]: (state, action) => {
        state.loading = false;
      },
    },
  });
  
  export default getFinanceDataSlice.reducer;
