import Price from "./price";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const props = {
  currentPrice: 100,
  currency: "eur",
  priceSize: 20,
};

describe("Spinner component", () => {
  it("Component should have '100' text value", () => {
    render(<Price {...props} />);
    expect(screen.getByTestId("price")).toHaveTextContent("100");
  });

  it("Component should have 'eur' text value", () => {
    render(<Price {...props} />);
    expect(screen.getByTestId("price")).toHaveTextContent("eur");
  });
});
