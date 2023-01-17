import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 16px 24px;

  border-radius: 8px;

  text-transform: uppercase;
  font-weight: 800;

  background-color: ${(props) => props.theme.colors.primary.main};
  transition: 0.5s;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.black};
  }
`;
