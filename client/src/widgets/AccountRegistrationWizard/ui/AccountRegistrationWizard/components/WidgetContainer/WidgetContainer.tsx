import { PersonalDetails } from '../PersonalDetails/PersonalDetails';
import { BusinessDetails } from '../BusinessDetails/BusinessDetails';
import { PointOfSale } from '../PointOfSale/PointOfSale';
import { DeliveryChannel } from '../DeliveryChannel/DeliveryChannel';
import { Complete } from '../Complete/Complete';
import { Controls } from '../Controls/Controls';
import { useFormData } from './hooks/useFormData';

import cls from './WidgetContainer.module.scss';

export const WidgetContainer = () => {
  const { activeStep, handleFormOnChange, handleFormOnSubmit } = useFormData();

  // Function to render active step
  const renderActiveStep = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <BusinessDetails />;
      case 3:
        return <PointOfSale />;
      case 4:
        return <DeliveryChannel />;
      case 5:
        return <Complete />;
      default:
        return null;
    }
  };

  return (
    <form
      className={cls.WidgetContainer}
      data-testid='WidgetContainer'
      aria-labelledby='form-title'
      onChange={handleFormOnChange}
      onSubmit={handleFormOnSubmit}
    >
      {/* Content of the active step */}
      {renderActiveStep(activeStep)}

      {/* Next/Prev Step buttons */}
      <Controls />
    </form>
  );
};
