const Input = ({ type, placeholder, value, onChange, iconName }) => {
  return (
    <span className="input-container">
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <i className={`fa fa-${iconName} fa-md fa-input`}></i>
    </span>
  );
};

export default Input;
