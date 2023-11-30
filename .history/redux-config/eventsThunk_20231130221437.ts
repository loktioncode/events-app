import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { artistsEventsAPI } from "./services";

interface EventsState {
  all_photos: any[];
  loading: "done" | "pending";
  error: string;
}

const initialState: EventsState = {
  all_photos: [],
  loading: "done",
  error: "",
};

export const fetchArtistsEvents = createAsyncThunk(
  "events/fetchArtistsEvents",
  async () => {
    const res = await artistsEventsAPI("");
    return res;
  }
);

export const fetchEvents = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtistsEvents.fulfilled, (state, action: PayloadAction<any>) => {
        state.all_photos = action.payload;
        state.loading = "done";
      })
      .addCase(fetchArtistsEvents.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchArtistsEvents.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "done";
        state.error = action.payload;
      });
  },
});

export default fetchEvents.reducer;