import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome text is visible', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Tour Review/i);
  expect(linkElement).toBeInTheDocument();
});
