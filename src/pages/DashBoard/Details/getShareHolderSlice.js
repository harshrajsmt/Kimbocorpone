import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ShareHolders = createAsyncThunk( "ShareHoldersInfo/ShareHolders", async () => {
    return fetch("http://localhost:5000/ShareHolders").then((res) => 
    res.json()
    
 );
});

const getDetailsSlice = createSlice({
    name:"ShareHoldersInfo",
    initialState:{
      userData:[],
      loading:false,
    },
    extraReducers : {
      [ShareHolders.pending]: (state, action) => {
        state.loading = true;
      },
      [ShareHolders.fulfilled]: (state, action) => {
        state.loading = false;
        state.ShareHoldersInfo = action.payload;
      },
      [ShareHolders.rejected]: (state, action) => {
        state.loading = false;
      },
    },
  });
  
  export default getDetailsSlice.reducer;
