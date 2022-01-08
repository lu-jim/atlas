import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/All/i);
  expect(linkElement).toBeInTheDocument();
});
