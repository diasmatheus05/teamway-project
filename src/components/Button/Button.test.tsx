import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Button } from "./";

describe("Button", () => {
  test("if button component is rendering correctly with its props", () => {
    const fn = jest.fn();
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={fn}>Test</Button>
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
    expect(container.textContent).toBe("Test");

    const btn = document.getElementsByTagName("button")[0];
    fireEvent.click(btn);
    expect(fn).toBeCalled();
  });
});
