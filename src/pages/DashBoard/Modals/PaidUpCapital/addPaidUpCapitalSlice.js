import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

export const PaidUpCapital = createSlice({
  name: "Capitals",
  initialState: {
    data: []
  },
  reducers: {
    addCapitals: (state, action) => {
      state.data.push(action.payload);
    }
  }
});

export const addCapitalsAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/ShareCapital", data);
    dispatch(addCapitals(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { addCapitals} = PaidUpCapital.actions;
export const showCapitals = (state) => state.Capitals.data;
export default PaidUpCapital.reducer;
