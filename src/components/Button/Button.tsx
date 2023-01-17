import { Button as StyledButton } from "./styles";
import { ButtonProps } from "./types";

export default function Button({
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
