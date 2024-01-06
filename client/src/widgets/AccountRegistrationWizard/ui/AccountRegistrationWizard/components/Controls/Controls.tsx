import { Button, ButtonTheme } from '@/shared/ui/Button';
import { MAX_STEPS } from '@/widgets/AccountRegistrationWizard/model/consts/wizard';
import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';

import cls from './Controls.module.scss';

export const Controls = () => {
  const { activeStep, isNextStepEnabled, setActiveStep } = useWizardContext();

  const handleNextOnChange = () => {
    setActiveStep((prev) => prev + 1);
  };

  return (
    <>
      {activeStep < MAX_STEPS && (
        <Button
          className={cls.NextButton}
          disabled={!isNextStepEnabled}
          onClick={handleNextOnChange}
          theme={!isNextStepEnabled ? ButtonTheme.DISABLED_GREY : ButtonTheme.ACTIVE_GREEN}
        >
          Next Step
        </Button>
      )}
    </>
  );
};
