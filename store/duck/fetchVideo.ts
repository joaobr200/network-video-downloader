import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface fetchVideoResponse {
  title: string;
  duration: string;
  embed: string;
  url: string;
}

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/video?url=${url}`);

      if (response.status === 400) {
        const error = {
          message: await response.json(),
          status: await response.status,
          ok: await response.ok,
        };
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(`catch err  ${err}`);
    }
  }
);

interface fetchVideoError {
  message: string;
  status: number;
  ok: boolean;
}

interface fetchVideoState {
  success: boolean;
  loading: boolean;
  error: boolean;
  data: fetchVideoResponse | null;
}

export const fetchVideoSlice = createSlice({
  name: "video",
  initialState: {
    success: false,
    loading: false,
    error: false,
    data: null,
  } as fetchVideoState,
  reducers: {
    cleanVideo: (state) => {
      state.data = null;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchVideo.pending, (state, action) => {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.data = null;
    });

    addCase(fetchVideo.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.success = false;
      state.data = null;
    });

    addCase(
      fetchVideo.fulfilled,
      (state, action: PayloadAction<fetchVideoResponse>) => {
        state.success = true;
        state.loading = false;
        (state.error = false), (state.data = action.payload);
        console.log(`fulfilled ${action.payload}`);
      }
    );
  },
});

export const { cleanVideo } = fetchVideoSlice.actions;

export default fetchVideoSlice.reducer;
