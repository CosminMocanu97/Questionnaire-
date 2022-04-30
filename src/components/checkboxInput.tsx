import { CheckboxProps } from "../interfaces/checkboxProps";

const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
  return (
    <div>
      <input
      type="checkbox"
      onChange={onChange}
      checked={checked}
      />
      <label> {label} </label>
    </div>
  );
};

export default Checkbox;
