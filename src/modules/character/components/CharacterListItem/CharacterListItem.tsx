import { FC } from 'react';
// interfaces
import { CharacterListItemProps } from './CharacterListItem.interface';

const CharacterListItem: FC<CharacterListItemProps> = ({ character }) => {
  return (
    <div>
      <div>
        <span>Name: </span>
        <span>{character.name}</span>
      </div>
      <div>
        <span>Status: </span>
        <span>{character.status}</span>
      </div>
      <div>
        <img src={character.image} />
      </div>
    </div>
  );
};

export default CharacterListItem;
