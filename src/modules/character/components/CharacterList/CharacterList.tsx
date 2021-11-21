import { FC } from 'react';
// hooks
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
// actions
import { fetchCharacterList } from 'modules/character/character.store';

const CharacterList: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.character.isLoadingList);
  const list = useAppSelector((state) => state.character.list);

  return (
    <div>
      <h2>CharacterList</h2>

      {isLoading && <div>Loading...</div>}

      <div>
        {list.map((character) => {
          return (
            <div key={character.id}>
              <div>Name: {character.name}</div>
              <div>Status: {character.status}</div>
            </div>
          );
        })}
      </div>

      <button onClick={() => dispatch(fetchCharacterList())}>Load</button>
    </div>
  );
};

export default CharacterList;
