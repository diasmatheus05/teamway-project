import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Question } from ".";
import theme from "../../styles/theme";

describe("Question", () => {
  test("if question component is rendering correctly with its props", () => {
    const fn = jest.fn();
    const { container, getByText } = render(
      <ThemeProvider theme={theme}>
        <Question
          text="Question text"
          answers={[
            { label: "answer 1", value: 1 },
            { label: "answer 2", value: 2 },
          ]}
          onChange={fn}
          selected={null}
        />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();

    expect(getByText("Question text")).toBeInTheDocument();
    expect(getByText("answer 1")).toBeInTheDocument();
    expect(getByText("answer 2")).toBeInTheDocument();
  });

  test("if question component is behaving correctly when selecting an answer", () => {
    const fn = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Question
          text="Question text"
          answers={[
            { label: "answer 1", value: 1 },
            { label: "answer 2", value: 2 },
          ]}
          onChange={fn}
          selected={1}
        />
      </ThemeProvider>
    );

    const answer_2 = getByText("answer 2");
    fireEvent.click(answer_2);
    expect(fn).toBeCalled();
  });
});
