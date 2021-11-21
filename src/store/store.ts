import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// reducers
import characterReducer from 'modules/character/character.store';
// RTK query
import { episodeApi } from 'modules/episode/episode.store';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    [episodeApi.reducerPath]: episodeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(episodeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
