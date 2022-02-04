import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Activity  = createAsyncThunk( "ActivityData /Activity", async () => {
    return fetch("http://localhost:5000/BusinessActivity").then((res) => 
    res.json()
    
 );
});

const getBusinessActivitySlice = createSlice({
    name:"ActivityData ",
    initialState:{
      ActivityData:[],
      loading:false,
    },
    extraReducers : {
      [Activity.pending]: (state, action) => {
        state.loading = true;
      },
      [Activity.fulfilled]: (state, action) => {
        state.loading = false;
        state.ActivityData = action.payload;
      },
      [Activity.rejected]: (state, action) => {
        state.loading = false;
      },
    },
  });
  
  export default getBusinessActivitySlice.reducer;
