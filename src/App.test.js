// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BuildTool title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BuildTool/i);
    expect(titleElement).toBeInTheDocument();
});
