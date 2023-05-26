import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
  };
  

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        Location: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
          },
    },
});

export const { Location } = locationSlice.actions;
export default locationSlice.reducer;
