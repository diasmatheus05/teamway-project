import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 24px;
`;

export const Title = styled.h2``;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const Option = styled.p`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
