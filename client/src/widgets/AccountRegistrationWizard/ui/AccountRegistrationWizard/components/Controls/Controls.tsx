import { Button, ButtonTheme } from '@/shared/ui/Button';
import {
  MAX_STEPS,
  wizardDataDefault,
} from '@/widgets/AccountRegistrationWizard/model/consts/wizard';
import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { senData } from '@/shared/lib/sendData/sendData';

import cls from './Controls.module.scss';

export const Controls = () => {
  const {
    activeStep,
    wizardData,
    isNextStepEnabled,
    setActiveStep,
    setWizardData,
    setError,
    isLoading,
    setIsLoading,
  } = useWizardContext();

  const handleDoneOnClick = async () => {
    try {
      setIsLoading(true);
      // Send collected data to API
      const status = await senData('account', wizardData);

      if (status === 200) {
        // Reset wizard data and active step to default
        setActiveStep(1);
        setWizardData(wizardDataDefault);
      } else {
        setError('Failed to send data please try again later');
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

  return (
    <div className={cls.ButtonContainer}>
      {/* Prev Step Button */}
      {activeStep > 1 && activeStep <= MAX_STEPS && (
        <Button onClick={() => setActiveStep((prev) => prev - 1)} disabled={isLoading}>
          Prev Step
        </Button>
      )}

      {/* Next Step Button */}
      {activeStep < MAX_STEPS && (
        <Button
          className={cls.NextButton}
          disabled={!isNextStepEnabled}
          onClick={() => setActiveStep((prev) => prev + 1)}
          theme={!isNextStepEnabled ? ButtonTheme.DISABLED_GREY : ButtonTheme.ACTIVE_GREEN}
        >
          Next Step
        </Button>
      )}

      {/* Show loading status of async operations */}
      {isLoading && <p className={cls.LoadingText}>Loading...</p>}

      {/* Done Button */}
      {activeStep === MAX_STEPS && (
        <Button className={cls.NextButton} onClick={handleDoneOnClick} disabled={isLoading}>
          Done
        </Button>
      )}
    </div>
  );
};
