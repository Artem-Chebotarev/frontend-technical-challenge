import { render, screen } from '@testing-library/react';
import { DeliveryChannel } from './DeliveryChannel';
import { useFetchDeliveryChannels } from './hooks/useFetchDeliveryChannels';

// Mock the hooks
jest.mock('./hooks/useFetchDeliveryChannels');
jest.mock('./validation/useValidateDeliveryChannel');

describe('DeliveryChannel component', () => {
  test('renders loading state', () => {
    // Mock the loading state
    (useFetchDeliveryChannels as jest.Mock).mockReturnValue({ isLoading: true });

    render(<DeliveryChannel />);

    // Verify that the loading message is rendered
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error state', () => {
    // Mock the error state
    (useFetchDeliveryChannels as jest.Mock).mockReturnValue({ error: 'An error occurred' });

    render(<DeliveryChannel />);

    // Verify that the error message is rendered
    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });

  test('renders delivery channels', () => {
    // Mock the data state
    (useFetchDeliveryChannels as jest.Mock).mockReturnValue({
      deliveryChannels: [{ id: 1, name: 'Channel 1' }],
    });

    render(<DeliveryChannel />);

    // Verify that the delivery channels are rendered
    expect(screen.getByTestId('TileItem.Img')).toBeInTheDocument();
  });
});
