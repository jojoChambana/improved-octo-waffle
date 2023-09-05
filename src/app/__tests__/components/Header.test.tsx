import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "@/app/components/Header";

describe("Header Component", () => {
  it("renders the footer", () => {
    const { getByText } = render(<Header />);
    const footerElement = getByText(/My App Header/i);
    expect(footerElement).toHaveTextContent("My App Header");
  });
});
