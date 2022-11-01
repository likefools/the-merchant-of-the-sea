const Buttons = (props) => {
  const { onClick, text } = props;
  return (
    <div className="btn">
      {/* <p>You clicked {count} times</p> */}
      <button onClick={(event) => onClick()}>{text}</button>
    </div>
  );
};

export default Buttons;
