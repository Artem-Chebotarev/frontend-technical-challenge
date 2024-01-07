import { BASE_URL } from "@/widgets/AccountRegistrationWizard/model/consts/api";

/**
 * If the payload in this route is very big (for example, more than 200), we need to implement
 * in order to improve the performance of our wizard.
 * 
 * There are two options of pagination: Offset-based pagination and Cursor-based pagination.
 * 
 * Offset-based pagination involves using an offset to specify where to start retrieving data 
 * and a limit to specify the number of items to retrieve. It's like saying, "Start from the 10th 
 * record and give me the next 5 items". The offset can either be an explicit number or converted 
 * from the requested page number. Requesting page 3 with a page size of 5 will translate to an 
 * offset of 10 because there are 2 pages before the 3rd page and 2 x 5 = 10. It's more common 
 * for an offset-based pagination API to accept the page parameter and the server will convert 
 * it into the offset value when querying the database.
 * 
 * Cursor-based pagination uses a pointer (the cursor) to a specific record in a dataset. Instead 
 * of saying "give me items 11 to 15," it says "give me 5 items starting after [specific item].".
 * A cursor-based pagination API accepts the following parameters: size and cursor.
 * 
 * In a nutshell, the choice between offset-based pagination and cursor-based pagination largely 
 * depends on the data and requirements. Offset-based is simpler and better for static or small 
 * datasets where direct access to pages is important. Cursor-based is more efficient and reliable 
 * for large, dynamic datasets where the data sequence is important and changes frequently.
 * 
 * If we want to implement infinite scrolling (like facebook news feed) we need to choose Cursor-based pagination.
 * However, in this case we also need to implement virtualization.
 * 
 * With infinite scrolling, all the items are on one single page. As the user scrolls further down 
 * the page, more items are appended to the DOM and with these items having complex DOM structure 
 * (lots of details to render), the DOM size rapidly increases. Virtualized lists is a technique 
 * to render only the items that are within the viewport.
 * 
 * I did not implemented any type of pagination as it requires to modify server code (accept query params and so on)
 */


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
