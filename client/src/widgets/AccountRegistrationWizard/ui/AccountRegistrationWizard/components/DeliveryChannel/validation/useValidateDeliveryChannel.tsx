import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { useEffect } from 'react';

export const useValidateDeliveryChannel = () => {
  const { wizardData, setIsNextStepEnabled } = useWizardContext();

  const { channelIds } = wizardData;

  useEffect(() => {
    if (channelIds.length > 0) {
      setIsNextStepEnabled(true);
    } else {
      setIsNextStepEnabled(false);
    }
  }, [channelIds]);
};
