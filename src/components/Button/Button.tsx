import { Button as StyledButton } from "./styles";

interface ButtonProps {
  children: string;
  type?: "button" | "submit";
}

export function Button({ children, type = "button" }: ButtonProps) {
  return <StyledButton type={type}>{children}</StyledButton>;
}
