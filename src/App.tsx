import { FC } from 'react';
// components
import CharacterList from 'modules/character/components/CharacterList';
import EpisodeList from 'modules/episode/components/EpisodeList';
// styles
import './App.css';

const App: FC = () => {
  return (
    <div>
      <div>Redux Toolkit Application</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ flex: 1 }}>
          <CharacterList />
        </div>
        <div style={{ flex: 1 }}>
          <EpisodeList />
        </div>
      </div>
    </div>
  );
};

export default App;
