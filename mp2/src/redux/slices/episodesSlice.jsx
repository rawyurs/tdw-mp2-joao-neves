import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  characters: [],
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    setEpisodeId: (state, action) => {
      state.id = action.payload;
    },
    setCharactersByEpisode: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { setEpisodeId, setCharactersByEpisode } = episodesSlice.actions;
export default episodesSlice.reducer;
