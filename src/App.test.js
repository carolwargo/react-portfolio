import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all elements on the page', () => {
  // Render the entire App
  render(<App />);
  
  // Check for specific elements

  const aboutElement = screen.getByText(/about/i);
 

  // Assert that all elements are in the document

  expect(aboutElement).toBeInTheDocument();
  
  
  // You can add more assertions as needed to test other aspects of the page
});

