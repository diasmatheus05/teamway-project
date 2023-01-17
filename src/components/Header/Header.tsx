import { Container, Option, OptionsWrapper, Title } from "./styles";
import { HeaderProps } from "./types";

export default function Header({ title, options }: HeaderProps) {
  const hasOptions = options && !!options.length;

  return (
    <Container>
      <Title>{title}</Title>
      {hasOptions && (
        <OptionsWrapper>
          {options.map((opt) => (
            <Option key={opt.label}>{opt.label}</Option>
          ))}
        </OptionsWrapper>
      )}
    </Container>
  );
}
