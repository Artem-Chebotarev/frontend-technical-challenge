import { PersonalDetails } from '../PersonalDetails/PersonalDetails';
import { useWizardContext } from '../../../../model/context/hooks/useWizardContext';
import { Controls } from '../Controls/Controls';

import cls from './WidgetContainer.module.scss';

export const WidgetContainer = () => {
  const { activeStep, setWizardData } = useWizardContext();

  // Function to render active step
  const renderActiveStep = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      default:
        return null;
    }
  };

  // Handler onChange fields in form
  const handleFormOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLInputElement;

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
