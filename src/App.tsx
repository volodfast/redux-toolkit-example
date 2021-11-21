import { FC } from 'react';
// components
import CharacterList from 'modules/character/components/CharacterList';
// styles
import './App.css';

const App: FC = () => {
  return (
    <div>
      <div>Redux Toolkit Application</div>
      <CharacterList />
    </div>
  );
};

export default App;
