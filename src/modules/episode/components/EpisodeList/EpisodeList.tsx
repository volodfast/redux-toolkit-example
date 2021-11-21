import { FC } from 'react';
// components
import EpisodeListItem from 'modules/episode/components/EpisodeListItem';
// hooks
import { useGetEpisodeListQuery } from 'modules/episode/episode.store';

const EpisodeList: FC = () => {
  const { data, isLoading } = useGetEpisodeListQuery('');

  return (
    <div>
      <h2>Episode list</h2>

      {isLoading && <div>Loading...</div>}

      {data?.results?.map((episode) => {
        return <EpisodeListItem key={episode.id} episode={episode} />;
      })}
    </div>
  );
};

export default EpisodeList;
