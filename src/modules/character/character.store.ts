import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiListResponse } from 'api/api.interfaces';
// interfaces
import { Character, CharacterState } from './character.interfaces';

const initialState: CharacterState = {
  isLoadingList: false,
  list: [],
};

export const fetchCharacterList = createAsyncThunk(
  'character/fetchCharacterList',
  async () => {
    const characterList: ApiListResponse<Character[]> = await fetch(
      'https://rickandmortyapi.com/api/character'
    ).then((res) => res.json());

    return characterList;
  }
);

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterList.pending, (state, action) => {
      state.isLoadingList = true;
      state.list = [];
    });

    builder.addCase(fetchCharacterList.fulfilled, (state, action) => {
      state.isLoadingList = false;
      state.list = action.payload.results;
    });

    builder.addCase(fetchCharacterList.rejected, (state, action) => {
      state.isLoadingList = false;
      state.list = [];
    });
  },
});

export default characterSlice.reducer;
