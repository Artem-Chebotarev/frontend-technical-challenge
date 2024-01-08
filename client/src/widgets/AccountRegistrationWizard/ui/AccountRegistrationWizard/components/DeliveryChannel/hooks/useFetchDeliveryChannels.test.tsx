import { renderHook, waitFor } from '@testing-library/react';
import { fetchData } from '@/shared/lib/fetchData/fetchData';
import { useFetchDeliveryChannels } from './useFetchDeliveryChannels';

jest.mock('@/shared/lib/fetchData/fetchData');

describe('useFetchDeliveryChannels hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('fetches delivery channels successfully', async () => {
    const mockData = [{ id: 1, name: 'Channel 1' }];
    (fetchData as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useFetchDeliveryChannels());

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => !result.current.isLoading);

    expect(result.current.deliveryChannels).toEqual(mockData);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
  });

  test('handles fetch error', async () => {
    const errorMessage = 'Failed to fetch delivery channels.';
    (fetchData as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useFetchDeliveryChannels());

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => !result.current.isLoading);

    expect(result.current.deliveryChannels).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toEqual(errorMessage);
  });
});
