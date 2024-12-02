import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characterDetails: {}
};

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setCharacterDetails: (state, action) => {
            state.characterDetails = action.payload;
        }
    }
});

export const { setCharacterDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
