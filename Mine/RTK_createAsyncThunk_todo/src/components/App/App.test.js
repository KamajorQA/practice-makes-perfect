import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h2 todo list element', () => {
  render(<App />);
  const headerElement = screen.getByText(/todo list/i);
  expect(headerElement).toBeInTheDocument();
});
