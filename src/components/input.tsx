import { InputProps } from "../interfaces/inputProps";

const TextField = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextField;