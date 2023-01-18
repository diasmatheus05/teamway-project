import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { PersonalityTest } from "./";

describe("Personality Test Page", () => {
  const Component = () => {
    return (
      <ThemeProvider theme={theme}>
        <PersonalityTest />
      </ThemeProvider>
    );
  };

  test("if personality test page is rendering correctly", async () => {
    const { container } = render(<Component />);

    expect(container).toBeInTheDocument();
  });
});
