import React from 'react';
import { render, screen } from '@testing-library/react'; // Import screen from @testing-library/react

import {PaymentFeature, RentalTermsAndPolicy}  from './PaymentFeature'; // Check the correct path

test('renders payment feature component', () => {
  render(<PaymentFeature />);
  console.log(document.body.innerHTML); // Check the rendered HTML in the console
  const paymentElement = screen.getByText('Expected Text Here'); // Use screen.getByText
  expect(paymentElement).toBeInTheDocument();
});
