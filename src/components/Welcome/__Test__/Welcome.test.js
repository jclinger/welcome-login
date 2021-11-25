import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomeScreen from "../Welcome";

test("Welcome Page renders", async () => {
    render(<WelcomeScreen />);

    expect(
      screen.getByLabelText("welcome page")
    ).toBeInTheDocument();
});