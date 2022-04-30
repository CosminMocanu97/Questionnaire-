export interface ButtonProps {
  type: "button" | "submit" | "reset";
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
