import Spinner from "./spinner";
import { render } from "@testing-library/react";

describe("Spinner component", () => {
  it("should render component when loading is true", () => {
    const { container } = render(<Spinner loading={true} />);
    expect(container.querySelector("svg")).toBeTruthy;
  });

  it("should not render component when loading state is false", () => {
    const { container } = render(<Spinner loading={false} />);
    expect(container.querySelector("svg")).toBe(null);
  });
});
