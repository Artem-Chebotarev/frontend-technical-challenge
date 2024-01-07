import { renderHook } from '@testing-library/react-hooks';
import { fetchData } from '@/shared/lib/fetchData/fetchData';
import { useFetchPointsOfSale } from './useFetchPointsOfSale';

jest.mock('@/shared/lib/fetchData/fetchData');

describe('useFetchPointsOfSale hoo', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('fetches points of sale successfully', async () => {
    const mockData = [{ id: 1, name: 'Point of Sale 1' }];
    (fetchData as jest.Mock).mockResolvedValue(mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetchPointsOfSale());

    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.pointsOfSale).toEqual(mockData);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
  });

  test('handles fetch error', async () => {
    const errorMessage = 'Failed to fetch points of sale.';
    (fetchData as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useFetchPointsOfSale());

    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.pointsOfSale).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toEqual(errorMessage);
  });
});
