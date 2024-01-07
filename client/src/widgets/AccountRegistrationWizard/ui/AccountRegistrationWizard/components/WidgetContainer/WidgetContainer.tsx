import { IWizardData, TEventValue } from '@/widgets/AccountRegistrationWizard/model/types';
import { PersonalDetails } from '../PersonalDetails/PersonalDetails';
import { BusinessDetails } from '../BusinessDetails/BusinessDetails';
import { PointOfSale } from '../PointOfSale/PointOfSale';
import { useWizardContext } from '../../../../model/context/hooks/useWizardContext';
import { Controls } from '../Controls/Controls';

import cls from './WidgetContainer.module.scss';

export const WidgetContainer = () => {
  const { activeStep, wizardData, setWizardData } = useWizardContext();

  // Function to render active step
  const renderActiveStep = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <BusinessDetails />;
      case 3:
        return <PointOfSale />;
      default:
        return null;
    }
  };

  // Handler onChange fields in form
  const handleFormOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, type } = target;

    let value: TEventValue = target.value;

    if (type === 'checkbox') {
      // Get filed of wizard data by name
      const entitiesIds = wizardData[name as keyof IWizardData];

      // Check whether entitiesIds is array
      if (Array.isArray(entitiesIds)) {
        // Checkbox logic
        value = entitiesIds.includes(+value)
          ? entitiesIds.filter((elem) => elem !== +value)
          : [...entitiesIds, +value];
      }
    }

    // Change wizard data
    setWizardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      className={cls.WidgetContainer}
      data-testid='WidgetContainer'
      aria-labelledby='form-title'
      onChange={handleFormOnChange}
    >
      {/* Content of the active step */}
      {renderActiveStep(activeStep)}

      {/* Next/Prev Step buttons */}
      <Controls />
    </form>
  );
};
