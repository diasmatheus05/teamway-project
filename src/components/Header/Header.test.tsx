import { render } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  test("if header component is rendering correctly with only title prop", () => {
    const { container } = render(<Header title="Title" />);

    expect(container).toBeInTheDocument();
    expect(container.textContent).toBe("Title");
  });

  test("if header component is rendering correctly with options prop", () => {
    const options = [{ label: "option", to: "/option" }];
    const { container, getByText } = render(
      <Header title="Title" options={options} />
    );

    expect(container).toBeInTheDocument();

    expect(getByText("option")).toBeInTheDocument();
  });
});
