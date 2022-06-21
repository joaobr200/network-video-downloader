import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async (url: string) => {
    try {
      const response = await fetch(
        "https://api.github.com/users/joaobr200"
      ).then((r) => r.json());
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const fetchVideoSlice = createSlice({
  name: "video",
  initialState: {
    success: false,
    loading: false,
    error: false,
    data: "",
  },
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchVideo.pending, (state, action) => {
      console.log(action);
      state.loading = true;
    });

    addCase(fetchVideo.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    addCase(fetchVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
  },
});

export default fetchVideoSlice.reducer;
