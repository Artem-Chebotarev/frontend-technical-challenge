import { Button, ButtonTheme } from '@/shared/ui/Button';
import { MAX_STEPS } from '@/widgets/AccountRegistrationWizard/model/consts/wizard';
import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';

import cls from './Controls.module.scss';

export const Controls = () => {
  const { activeStep, isNextStepEnabled, setActiveStep, isLoading } = useWizardContext();

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
        <Button className={cls.NextButton} type='submit' disabled={isLoading}>
          Done
        </Button>
      )}
    </div>
  );
};
