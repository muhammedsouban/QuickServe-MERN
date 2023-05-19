import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  mobile: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignup: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { userSignup } = userSlice.actions;
export default userSlice.reducer;
