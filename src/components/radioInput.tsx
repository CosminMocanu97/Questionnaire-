import { RadioProps } from "../interfaces/radioProps";

const Radio = ({ name, value, label, checked, onChange }: RadioProps) => {
  return (
    <div>
      <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
      />
      <label> {label} </label>
    </div>
  );
};

export default Radio;
