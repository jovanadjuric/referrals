const Button = ({ onClick, text, isDisabled }) => {
  return (
    <button
      className={`btn-main ${isDisabled && "disabled"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
