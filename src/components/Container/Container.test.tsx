import { render } from "@testing-library/react";
import { Container } from "./";

describe("Container", () => {
  test("if container component is rendering correctly with its props", () => {
    const { container } = render(<Container>Test</Container>);

    expect(container).toBeInTheDocument();
    expect(container.textContent).toBe("Test");
  });
});
