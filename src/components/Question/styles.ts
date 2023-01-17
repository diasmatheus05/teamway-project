import styled from "styled-components";

export const QuestionText = styled.h1`
  max-width: 800px;
  text-align: center;

  margin-top: 16px;
  margin-bottom: 32px;
`;

export const AnswersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const Answer = styled.div<{ isSelected?: boolean }>`
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primary.light
      : props.theme.colors.white};
  color: ${(props) =>
    props.isSelected ? props.theme.colors.white : props.theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  border-radius: 8px;
  border: 4px solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors.primary["primary-600"]
        : props.theme.colors.white};
  transition: border-color 0.2s;

  cursor: pointer;

  &:hover {
    border: 4px solid
      ${(props) =>
        props.isSelected
          ? props.theme.colors.primary["primary-700"]
          : props.theme.colors.primary["primary-500"]};
  }
`;
