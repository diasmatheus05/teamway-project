import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 16px 24px;

  border-radius: 8px;

  text-transform: uppercase;
  font-weight: 800;

  background-color: ${(props) => props.theme.colors.primary["primary-600"]};
  color: ${(props) => props.theme.colors.white};
`;
