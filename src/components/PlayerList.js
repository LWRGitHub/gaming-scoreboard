import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      { context => (
        <React.Fragment>
          {console.log(context.value)}
          {context.map( (player, index) =>
            <Player 
              {...player}
              key={player.id.toString()} 
              index={index} 
              changeScore={props.changeScore}  
              removePlayer={props.removePlayer}
              isHighScore={props.highScore === player.score} 
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;