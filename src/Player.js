const Player = (props) => {
  const { player, onClick } = props;

  // Adds money subtracts money
  return (
    <div className="Player">
      <div className="container">
        <p>player name: {player.playerName}</p>
        <p>money: {player.money}</p>
        <div className="selsFish">
          <p>fish: {player.items.fish}</p>
          <div className="btns">
            <button onClick={(buyItems) => onClick()}>buy</button>
            <button onClick={(event) => onClick()}>sell</button>
          </div>
        </div>
       
        <p>meat: {player.items.meat}</p>
      </div>
    </div>
  );
};

export default Player;
