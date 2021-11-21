import { configureStore } from '@reduxjs/toolkit';
// reducers
import characterReducer from 'modules/character/character.store';

export const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
