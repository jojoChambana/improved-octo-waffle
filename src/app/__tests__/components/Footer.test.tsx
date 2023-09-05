import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "@/app/components/Footer";

describe("Footer Component", () => {
  it("renders the footer", () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/My App Footer/i);
    expect(footerElement).toHaveTextContent("My App Footer");
  });
});
