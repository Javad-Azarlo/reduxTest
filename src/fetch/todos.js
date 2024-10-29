import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  data: [],
  error: "",
};
const fetchToken = createAsyncThunk("token/fetchToken", () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data);
});
const tokenSlice = createSlice({
  name: "token",
  initialState,
  extraReducers: (Builder) => {
    Builder.addCase(fetchToken.pending, (state, action) => {
      state.loading = true;
    });
    Builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    Builder.addCase(fetchToken.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export default tokenSlice;
export {fetchToken}
