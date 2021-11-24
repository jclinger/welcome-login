import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test("Renders main App component", () => {
	render(<App />);

	expect(
		screen.getByLabelText("app-main")
	).toBeInTheDocument();
});
