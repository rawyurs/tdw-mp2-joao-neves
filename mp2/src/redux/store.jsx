import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../redux/slices/filtersSlice';
import detailsReducer from '../redux/slices/detailsSlice';
import episodesReducer from '../redux/slices/episodesSlice';
import { api } from './services/api';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        details: detailsReducer,
        episodes: episodesReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
