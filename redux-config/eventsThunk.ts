import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getArtistsEvents } from "./services";

interface EventsState {
  all_events: [];
  loading: "done" | "pending";
  error: string;
}

const initialState: EventsState = {
  all_events: [],
  loading: "done",
  error: "",
};

export const fetchArtistsEvents = createAsyncThunk(
  "events/fetchArtistsEvents",
  async (artistname: string) => {
    const res = await getArtistsEvents(artistname);
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
        state.all_events = action.payload;
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