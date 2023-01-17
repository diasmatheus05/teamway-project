import styled from "styled-components";

export const Counter = styled.p`
  margin-bottom: 16px;
`;

export const ResultTitle = styled.h1`
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ResultText = styled.p`
  text-align: justify;
`;

export const ButtonWrapper = styled.div<{ isRedoButton?: boolean }>`
  margin-top: 32px;
  ${(props) => !props.isRedoButton && { marginLeft: "auto" }}
`;
