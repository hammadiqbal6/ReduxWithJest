import { screen } from "@testing-library/react";
import Footer from "./Footer";
import { render } from "../utils/test-utils";

describe("footer component", () => {
  test("renders footer", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer-element");
    expect(footerElement).toBeInTheDocument();
  });

  test("renders all filters", () => {
    render(<Footer />);
    const filtersList = ["All", "Active", "Completed"];
    filtersList.forEach((filter) => {
      const element = screen.getByText(filter);
      expect(element).toBeInTheDocument();
    });
  });
});
