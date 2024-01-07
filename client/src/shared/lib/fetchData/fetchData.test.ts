import { fetchData } from "./fetchData";

describe('fetchData function', () => {
  const mockResponse = (status: boolean, responseData: Record<string, unknown>) => {
    return Promise.resolve({
      ok: status,
      json: () => Promise.resolve(responseData),
      status: status ? 200 : 404,
    } as Response);
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('fetches successfully data from an API', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      mockResponse(true, { yourData: 'mockedData' })
    );

    const result = await fetchData<{ yourData: string }>('endpoint');

    expect(result).toEqual({ yourData: 'mockedData' });
  });

  test('handles non-ok responses', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      mockResponse(false, { error: 'Mocked error message' })
    );

    await expect(fetchData('endpoint')).rejects.toThrowError(
      'Failed to fetch data. Status: 404'
    );
  });

  test('handles network issues', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Network error')));

    await expect(fetchData('endpoint')).rejects.toThrowError(
      'Failed to fetch data. Message: Network error'
    );
  });
});
