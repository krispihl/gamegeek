import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome, GameGeek!/i);
  expect(headerElement).toBeInTheDocument();
});
