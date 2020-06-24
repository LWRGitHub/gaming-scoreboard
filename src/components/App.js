import React, { Component } from 'react';
import {Provider} from './Context';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Player 1",
        score: 0,
        id: 1
      },
      {
        name: "Player 2",
        score: 0,
        id: 2
      },
    ]
  };

  //player id counter
  prevPlayerId = 4;

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />
    
          {/* Players list */}
            <PlayerList 
              players={this.state.players}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
              highScore={highScore}         
            />

          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
      </Provider>
    );
  }
}

export default App;