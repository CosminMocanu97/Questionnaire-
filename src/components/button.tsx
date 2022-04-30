import { ButtonProps } from "../interfaces/buttonProps";

const Button = ({ label, type, onClick, disabled }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
     {label}
    </button>
  );
};

export default Button;