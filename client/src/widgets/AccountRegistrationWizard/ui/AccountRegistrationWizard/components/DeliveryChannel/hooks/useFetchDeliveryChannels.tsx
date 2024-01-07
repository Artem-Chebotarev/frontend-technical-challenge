import { fetchData } from '@/shared/lib/fetchData/fetchData';
import { ITileItem } from '@/widgets/AccountRegistrationWizard/model/types';
import { useEffect, useState } from 'react';

/**
 * Custom hook to fetch delivery channels from API
 */
export const useFetchDeliveryChannels = () => {
  const [deliveryChannels, setDeliveryChannels] = useState<ITileItem[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDeliveryChannels = async () => {
      try {
        setIsLoading(true);

        const data = await fetchData<ITileItem[]>('channel');

        if (data instanceof Array) {
          setDeliveryChannels(data);
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

    fetchDeliveryChannels();
  }, []);

  return { deliveryChannels, isLoading, error };
};
