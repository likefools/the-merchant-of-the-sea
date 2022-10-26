import Player from "./Player";
import StreetMarket from "./StreetMarket";

const Game = (props) => {
  const player = {
    playerName: "israel",
    money: 1000,
    items: { fish: 0, meat: 0 },
  };
  const location = { location: "Jerusalem", items: { fish: 50, meat: 100 } };

  return (
    <div className="Game">
      <Player player={player} />
      <StreetMarket location={location} />
    </div>
  );
};

export default Game;
