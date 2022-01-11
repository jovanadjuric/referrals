const Input = ({ type, placeholder, value, onChange }) => {
  return <input className="form-control" 
    type={type} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange}  />;
};

export default Input;
