import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
// We can describe list of test cases inside out describe object
describe("List of all test cases", () => {
  it("should load the page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should Search for Submit button", () => {
    render(<Contact />);
    const heading = screen.getByText("Submit");
    expect(heading).toBeInTheDocument();
  });
// We can also "test" in place of "it" it is just a naming convention
  it("Should Search all textfield button", () => {
    render(<Contact />);
    const heading = screen.getAllByRole("textbox");

    // This will log Virtual DOM Element
    console.log(heading);
    expect(heading.length).toBe(2);
  });
});
