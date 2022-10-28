import { useState } from "react";

const Player = (props) => {
  const { player, count } = props;

  // Adds money subtracts money
  return (
    <div className="Player">
      {player.map((user) => (
        <div key={user.id} className="container">
          <p>player name: {user.playerName}</p>
          <p>money: {user.money}</p>
          <p>fish: {user.items.fish + count}</p>
          <p>meat: {user.items.meat + count}</p>
        </div>
      ))}
    </div>
  );
};

export default Player;
