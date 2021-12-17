import Price from "./price";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const props = {
  currentPrice: 100,
  currency: 200,
  priceSize: 20,
};

describe("Spinner component", () => {
  it("should render component when loading is true", () => {
    render(<Price {...props} />);
    expect(screen.getByTestId("price")).toHaveTextContent("100");
  });
});
