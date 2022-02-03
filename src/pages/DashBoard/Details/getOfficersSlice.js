import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Officers = createAsyncThunk( "OfficersInfo/Officers", async () => {
    return fetch("http://localhost:5000/Officers").then((res) => 
    res.json()
    
 );
});

const getOfficersSlice = createSlice({
    name:"OfficersInfo",
    initialState:{
      userData:[],
      loading:false,
    },
    extraReducers : {
      [Officers.pending]: (state, action) => {
        state.loading = true;
      },
      [Officers.fulfilled]: (state, action) => {
        state.loading = false;
        state.OfficersInfo = action.payload;
      },
      [Officers.rejected]: (state, action) => {
        state.loading = false;
      },
    },
  });
  
  export default getOfficersSlice.reducer;
