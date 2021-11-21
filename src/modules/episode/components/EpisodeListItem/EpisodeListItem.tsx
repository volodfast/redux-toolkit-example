import { FC } from 'react';
// interfaces
import { EpisodeListItemProps } from './EpisodeListItem.interface';

const EpisodeListItem: FC<EpisodeListItemProps> = ({ episode }) => {
  return (
    <div>
      <div>
        <span>Name: </span>
        <span>{episode.name}</span>
      </div>
      <div>
        <span>Episode: </span>
        <span>{episode.episode}</span>
      </div>
    </div>
  );
};

export default EpisodeListItem;
