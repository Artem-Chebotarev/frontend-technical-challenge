import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { useEffect } from 'react';

export const useValidatePointOfSale = () => {
  const { wizardData, setIsNextStepEnabled } = useWizardContext();

  const { posIds } = wizardData;

  useEffect(() => {
    if (posIds.length > 0) {
      setIsNextStepEnabled(true);
    } else {
      setIsNextStepEnabled(false);
    }
  }, [posIds]);
};
