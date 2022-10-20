import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("Renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders good to see you if button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('Renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert`
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument;
  });

  test("Does not render 'good to see you' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert`
    const outputElement = screen.queryByText("It's good to see you");
    expect(outputElement).toBeNull;
  });
});
