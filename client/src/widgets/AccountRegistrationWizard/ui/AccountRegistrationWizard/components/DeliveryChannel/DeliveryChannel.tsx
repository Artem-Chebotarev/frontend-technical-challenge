import { TileList } from '../TileList/TileList';
import { useFetchDeliveryChannels } from './hooks/useFetchDeliveryChannels';
import { useValidateDeliveryChannel } from './validation/useValidateDeliveryChannel';

export const DeliveryChannel = () => {
  // Get data, loading and error
  const { deliveryChannels, isLoading, error } = useFetchDeliveryChannels();

  // Validate delivery channels
  useValidateDeliveryChannel();

  // Show error on the screen
  if (error) {
    return <p>{error}</p>;
  }

  // Show loading on the screen
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <fieldset>
      {/* Info about active step */}
      <legend>Delivery channel</legend>

      {/* List of delivery channels */}
      <TileList tiles={deliveryChannels} entityName={'channel'} />
    </fieldset>
  );
};
