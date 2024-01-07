import { BASE_URL } from "@/widgets/AccountRegistrationWizard/model/consts/api";

export const senData =  async <T>(endpoint: string, data: T) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      });

      return response.status;
    } catch (e) {
      if (e instanceof Error) {
        // Catch any other errors (e.g., network issues)
        throw new Error(`Failed to send data. Message: ${e.message}`);
      } 
    }
  };
