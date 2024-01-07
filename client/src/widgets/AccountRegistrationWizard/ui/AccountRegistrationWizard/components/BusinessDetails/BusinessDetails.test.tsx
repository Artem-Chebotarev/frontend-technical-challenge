import { render, screen } from '@testing-library/react';
import { useBusinessDetails } from './hooks/useBusinessDetails';
import { BusinessDetails } from './BusinessDetails';

jest.mock('./hooks/useBusinessDetails');

describe('BusinessDetails component', () => {
  test('renders business details form', () => {
    // Mock the useBusinessDetails hook
    (useBusinessDetails as jest.Mock).mockReturnValue({
      errors: {},
      refBusinessName: { current: null },
      refBusinessSize: { current: null },
      refBusinessType: { current: null },
      restBusinessName: {},
      restBusinessSize: {},
      restBusinessType: {},
    });

    render(<BusinessDetails />);

    // Assert that the "Business Details" legend is present
    expect(screen.getByTestId('BusinessDetails.Legend')).toBeInTheDocument();

    // Assert that the business name field is present
    expect(screen.getByTestId('BusinessDetails.BusinessNameInput')).toBeInTheDocument();

    // Assert that the business size field is present
    expect(screen.getByTestId('BusinessDetails.BusinessSizeInput')).toBeInTheDocument();

    // Assert that the business type field is present
    expect(screen.getByTestId('BusinessDetails.BusinessTypeSelect')).toBeInTheDocument();
  });
});
