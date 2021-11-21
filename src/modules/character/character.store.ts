import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// interfaces
import {
  CharacterLoadListResultAction,
  CharacterState,
} from './character.interfaces';

const initialState: CharacterState = {
  isLoadingList: false,
  list: [],
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    loadCharacterListRequest: (state) => {
      state.isLoadingList = true;
      state.list = [];
    },
    loadCharacterListResult: (
      state,
      action: PayloadAction<CharacterLoadListResultAction>
    ) => {
      state.isLoadingList = false;

      if (action.payload.list) {
        state.list = action.payload.list;
      }
    },
  },
});

export const { loadCharacterListRequest, loadCharacterListResult } =
  characterSlice.actions;

export default characterSlice.reducer;
