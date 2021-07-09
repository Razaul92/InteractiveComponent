import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
//Arrange
  render(<App />);
  //Act
  //...nothing
  
  //Assert
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
