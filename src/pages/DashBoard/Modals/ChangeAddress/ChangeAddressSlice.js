import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

export const NewAddress = createSlice({
  name: "Address",
  initialState: {
    data: []
  },
  reducers: {
    updateAddress: (state, action) => {
      state.data.put(action.payload);
    }
  }
});

export const updateAddressAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/Address", data);
    dispatch(updateAddress(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { updateAddress} = NewAddress.actions;
// export const showCapitals = (state) => state.Capitals.data;
export default NewAddress.reducer;
