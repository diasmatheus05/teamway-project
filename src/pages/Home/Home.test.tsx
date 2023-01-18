import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Home } from "./";

describe("Home Page", () => {
  test("if home page is rendering correctly", () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(container).toBeInTheDocument();

    expect(
      getByText("Are you an introvert or an extrovert?")
    ).toBeInTheDocument();
    expect(getByText("Make your test to know")).toBeInTheDocument();

    expect(getByText("Start Test")).toBeInTheDocument();
  });
});
