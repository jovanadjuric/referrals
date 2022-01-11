import { useState } from "react";
import { validateEmail, validateField } from "../../utils/validator";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  iconName,
  isRequired,
}) => {
  const [isValid, toggleValidation] = useState(!isRequired);

  const handleChange = (value) => {
    if (isRequired) {
      toggleValidation(validateField(value));
      if (type === "email") {
        toggleValidation(validateEmail(value));
      }
    }
    onChange(value);
  };

  return (
    <span className="input-container">
      <input
        className={"form-input" + (!isValid ? " is-invalid" : "")}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => handleChange(evt.target.value)}
      />
      <i className={`fa fa-${iconName} fa-md fa-input`}></i>
    </span>
  );
};

export default Input;
