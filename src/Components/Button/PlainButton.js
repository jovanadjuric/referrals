const PlainButton = ({ onClick, text }) => {
  return (
    <button className="btn-noStyles" onClick={onClick}>
      {text}
    </button>
  );
};

export default PlainButton;
