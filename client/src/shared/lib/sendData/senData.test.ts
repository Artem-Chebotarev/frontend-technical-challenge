import { BASE_URL } from "@/widgets/AccountRegistrationWizard/model/consts/api";
import { senData } from "./sendData";


describe('senData function', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('sends data successfully', async () => {
    const mockData = { yourKey: 'yourValue' };
    const expectedEndpoint = 'yourEndpoint';

    // Mock fetch to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
    } as Response);

    const status = await senData(expectedEndpoint, mockData);

    // Assert that the fetch function was called with the correct parameters
    expect(global.fetch).toHaveBeenCalledWith(`${BASE_URL}/${expectedEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: mockData,
      }),
    });

    // Assert that the status returned by senData matches the expected status
    expect(status).toBe(200);
  });

  test('handles send data error', async () => {
    const mockData = { yourKey: 'yourValue' };
    const expectedEndpoint = 'yourEndpoint';

    // Mock fetch to simulate an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    // Assert that senData throws the expected error
    await expect(senData(expectedEndpoint, mockData)).rejects.toThrowError(
      'Failed to send data. Message: Network error'
    );
  });
});
