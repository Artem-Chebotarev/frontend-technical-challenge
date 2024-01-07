import { render, screen } from '@testing-library/react';
import { PointOfSale } from './PointOfSale';
import { useFetchPointsOfSale } from './hooks/useFetchPointsOfSale';

// Mock the hooks
jest.mock('./hooks/useFetchPointsOfSale');
jest.mock('./validation/useValidatePointOfSale');

describe('PointOfSale Component', () => {
  test('renders loading state', () => {
    // Mock the loading state
    (useFetchPointsOfSale as jest.Mock).mockReturnValue({ isLoading: true });

    render(<PointOfSale />);

    // Verify that the loading message is rendered
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error state', () => {
    // Mock the error state
    (useFetchPointsOfSale as jest.Mock).mockReturnValue({ error: 'An error occurred' });

    render(<PointOfSale />);

    // Verify that the error message is rendered
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });

  test('renders points of sale', () => {
    // Mock the data state
    (useFetchPointsOfSale as jest.Mock).mockReturnValue({
      pointsOfSale: [{ id: 1, name: 'POS 1' }],
    });

    render(<PointOfSale />);

    // Verify that the points of sale are rendered
    expect(screen.getByTestId('TileItem.Img')).toBeInTheDocument();
  });
});
