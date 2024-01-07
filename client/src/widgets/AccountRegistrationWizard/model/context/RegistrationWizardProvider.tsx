import { ReactNode, useEffect, useState } from 'react';
import {
  RegistrationWizardContext,
  RegistrationWizardContextProps,
} from './RegistrationWizardContext';
import {
  REGISTRATION_WIZARD_ACTIVE_STEP,
  REGISTRATION_WIZARD_DATA,
  initialActiveStep,
  initialWizardData,
} from '../consts/localStorage';
import { IWizardData } from '../types';

interface RegistrationWizardProviderProps {
  children: ReactNode;
}

export const RegistrationWizardProvider = (props: RegistrationWizardProviderProps) => {
  const { children } = props;

  const [activeStep, setActiveStep] = useState<number>(initialActiveStep);
  const [wizardData, setWizardData] = useState<IWizardData>(initialWizardData);
  const [isNextStepEnabled, setIsNextStepEnabled] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const contextValue: RegistrationWizardContextProps = {
    activeStep,
    setActiveStep,
    wizardData,
    setWizardData,
    isNextStepEnabled,
    setIsNextStepEnabled,
    error,
    setError,
  };

  // Change active step in LS
  useEffect(() => {
    // Early return
    if (!activeStep) {
      return;
    }

    localStorage.setItem(REGISTRATION_WIZARD_ACTIVE_STEP, String(activeStep));
  }, [activeStep]);

  // Change wizard data step in LS
  useEffect(() => {
    // Early return
    if (!wizardData) {
      return;
    }

    localStorage.setItem(REGISTRATION_WIZARD_DATA, JSON.stringify(wizardData));
  }, [wizardData]);

  return (
    <RegistrationWizardContext.Provider value={contextValue}>
      {children}
    </RegistrationWizardContext.Provider>
  );
};
