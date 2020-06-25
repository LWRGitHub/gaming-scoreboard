import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
  const highScore = this.getHighScore();

  return (
    <div className="scoreboard">
      <Header />
        <PlayerList
          highScore={highScore}         
        />

      <AddPlayerForm />
    </div>
  );
}

export default App;