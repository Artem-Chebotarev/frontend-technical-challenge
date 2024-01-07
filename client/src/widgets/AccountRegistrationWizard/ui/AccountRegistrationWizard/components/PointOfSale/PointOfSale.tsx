import { TileList } from '../TileList/TileList';
import { useFetchPointsOfSale } from './hooks/useFetchPointsOfSale';
import { useValidatePointOfSale } from './validation/useValidatePointOfSale';

export const PointOfSale = () => {
  // Get data, loading and error
  const { pointsOfSale, isLoading, error } = useFetchPointsOfSale();

  // Validate points of sale
  useValidatePointOfSale();

  // Show error on the screen
  if (error) {
    return <p className='ErrorText'>{error}</p>;
  }

  // Show loading on the screen
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <fieldset>
      {/* Info about active step */}
      <legend>Points of sale</legend>

      {/* List of points of sale */}
      <TileList tiles={pointsOfSale} entityName={'pos'} />
    </fieldset>
  );
};
