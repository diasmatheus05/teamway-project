import {
  Header as StyledHeader,
  Option,
  OptionsWrapper,
  Title,
} from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <Title>Personality Test Application</Title>
      <OptionsWrapper>
        <Option>My Results</Option>
        <Option>My Profile</Option>
      </OptionsWrapper>
    </StyledHeader>
  );
}
