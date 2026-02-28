// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LLMZen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LLMZen/i);
    expect(titleElement).toBeInTheDocument();
});
