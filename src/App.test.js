import { render, screen } from '@testing-library/react';

import BookingForm from './components/BookingForm';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('Renders the date label in BookingForm', () => {
  const mockAvailableTimes = ['10:00', '11:00', '12:00']; // Mock times
  const mockDispatch = jest.fn(); // Mock dispatch function

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  const dateLabelElement = screen.getByText("Choose date");
  expect(dateLabelElement).toBeInTheDocument();
});
