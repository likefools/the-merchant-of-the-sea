import Player from "./Player";
import Buttons from "./Buttons";
import StreetMarket from "./StreetMarket";
import { useEffect } from "react";
import { useState } from "react";

const Game = (props) => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchPlayer();
      setPlayer(userFromServer);
    };

    getUser();
  }, []);

  // Fetch user
  const fetchPlayer = async () => {
    const res = await fetch("http://localhost:5000/player");
    const data = await res.json();
    console.log(data);
    return data;
  };

  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  const location = {
    locationName: "Jerusalem",
    items: { fish: 50, meat: 100 },
  };

  return (
    <div className="Game">
      {/* <div>hi {user}</div> */}
      <Player player={player} count={count} />
      <StreetMarket location={location} />
      {count}
      <Buttons onClick={onClick} text="add" />
    </div>
  );
};

export default Game;
