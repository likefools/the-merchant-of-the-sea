const StreetMarket = (props) => {
  const { location, items } = props.location;

  return (
    <div className="StreetMarket">
      <div className="container">
        <p>location: {location}</p>
        <p>fish: {items.fish}</p>
        <p>meat: {items.meat}</p>
      </div>
    </div>
  );
};

export default StreetMarket;
