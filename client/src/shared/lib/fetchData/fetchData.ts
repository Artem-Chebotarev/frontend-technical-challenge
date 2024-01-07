import { BASE_URL } from "@/widgets/AccountRegistrationWizard/model/consts/api";

export const fetchData =  async <T>(endpoint: string): Promise<T | undefined> => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data: T = await response.json(); 

        return data;
      } else {
        // Handle non-ok responses, e.g., throw an error or return a specific value
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
    } catch (e) {
      if (e instanceof Error) {
        // Catch any other errors (e.g., network issues)
        throw new Error(`Failed to fetch data. Message: ${e.message}`);
      } 
    }
  };
