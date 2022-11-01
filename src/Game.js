import Player from "./Player";
import Buttons from "./Buttons";
import StreetMarket from "./StreetMarket";

import { useEffect, useState } from "react";

const Game = (props) => {
  
  const num = { a: 10 };

  const playerInfo = {
    playerName: "yoru",
    money: 500,
    items: {
      fish: 3,
      meat: 0,
    }
  };

  const location = {
    locationName: "Jerusalem",
    items: { fish: 200, meat: 100 },
  };
  
  const [itemss, setItems] = useState(num.a);
  const [player, setItem] = useState(playerInfo);
  const [alertM, setAlertm] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertm(false);
      console.log('This will run after 2 second!')
    }, 2000);
    return () => clearTimeout(timer);
  }, [alertM]);

  // useEffect(() => {player = fish}, [fish]);
  
  
  
  const buyItems = () => {
    return {...player, fish: player.items.fish += 1 } && {...player, money: player.money -= location.items.fish }
  };


  const sellItems = () => setItem(itemss - 1);

  

  
  return (
    <div className="game">
      <div className="container">

        <Player
          player = {player}
          onClick={() => setItem(buyItems())}
          />
        
        <StreetMarket location={location} />
        <div className="btnsShop">
          <button onClick={() => {
            if(player.money > location.items.fish){
              setItem(buyItems())
            } else{
              setAlertm(true)
            }
            }}>
            buy fish
          </button>
          <button onClick={() => setItem({...player, fish: player.items.fish -= 1})}>
            sell fish
          </button>
          <button onClick={() => setItem({...player, meat: player.items.meat += 1})}>
            buy meat
          </button>
          <button onClick={() => setItem({...player, meat: player.items.meat -= 1})}>
            sell meat
          </button>

          {/* <Buttons onClick={buyItems} text="buy" />
          <Buttons onClick={sellItems} text="sell" /> */}
        </div>
        {alertM ? "not enough money": ''}
      </div>
    </div>
  );
};

export default Game;
