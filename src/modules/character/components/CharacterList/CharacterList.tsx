import { FC } from 'react';
// components
import CharacterListItem from 'modules/character/components/CharacterListItem';
// hooks
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
// actions
import { fetchCharacterList } from 'modules/character/character.store';

const CharacterList: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.character.isLoadingList);
  const list = useAppSelector((state) => state.character.list);

  const handleFetchList = () => {
    dispatch(fetchCharacterList());
  };

  return (
    <div>
      <h2>CharacterList</h2>

      {isLoading && <div>Loading...</div>}

      <div>
        {list.map((character) => {
          return <CharacterListItem key={character.id} character={character} />;
        })}
      </div>

      <button onClick={handleFetchList}>Load</button>
    </div>
  );
};

export default CharacterList;
