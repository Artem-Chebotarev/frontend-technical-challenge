import { Dispatch, SetStateAction, createContext } from 'react';
import { initialActiveStep, initialWizardData } from '../consts/localStorage';
import { IWizardData } from '../types';


export interface RegistrationWizardContextProps {
    activeStep: number;
    setActiveStep: Dispatch<SetStateAction<number>>;
    wizardData: IWizardData;
    setWizardData: Dispatch<SetStateAction<IWizardData>>;
    isNextStepEnabled: boolean;
    setIsNextStepEnabled: Dispatch<SetStateAction<boolean>>;
}

const initialContext = {
    activeStep: initialActiveStep,
    setActiveStep: () => {},
    wizardData: initialWizardData,
    setWizardData: () => {},
    isNextStepEnabled: false,
    setIsNextStepEnabled: () => {},
}

export const RegistrationWizardContext = createContext<RegistrationWizardContextProps>(initialContext);
