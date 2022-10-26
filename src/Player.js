const Game = (props) => {
  const { playerName, money, items } = props.player;

  return (
    <div className="Player">
      <div className="container">
        <p>player name: {playerName}</p>
        <p>money: {money}</p>
        <p>fish: {items.fish}</p>
        <p>meat: {items.meat}</p>
      </div>
    </div>
  );
};

export default Game;
