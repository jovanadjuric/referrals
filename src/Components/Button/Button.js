const Button = ({ onClick, text, isDisabled }) => {
  return (
    <>
      <button className="btn-main" onClick={onClick}>
        {text}
      </button>
      {isDisabled && (
        <span className="field-validation">
          Please, fill out all the fields.
        </span>
      )}
    </>
  );
};

export default Button;
