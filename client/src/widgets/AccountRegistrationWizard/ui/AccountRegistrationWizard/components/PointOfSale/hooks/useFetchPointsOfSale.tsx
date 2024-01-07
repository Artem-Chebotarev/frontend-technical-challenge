import { fetchData } from '@/shared/lib/fetchData/fetchData';
import { ITileItem } from '@/widgets/AccountRegistrationWizard/model/types';
import { useEffect, useState } from 'react';

/**
 * Custom hook to fetch points of sale from API
 */
export const useFetchPointsOfSale = () => {
  const [pointsOfSale, setPointOfSale] = useState<ITileItem[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPointsOfSale = async () => {
      try {
        setIsLoading(true);

        const data = await fetchData<ITileItem[]>('pos');

        if (data instanceof Array) {
          setPointOfSale(data);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(e.message);

          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPointsOfSale();
  }, []);

  return { pointsOfSale, isLoading, error };
};
