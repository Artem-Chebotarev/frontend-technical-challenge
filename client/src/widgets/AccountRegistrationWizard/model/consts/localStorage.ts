import { IWizardData } from "../types";
import { wizardDataDefault } from "./wizard";

export const REGISTRATION_WIZARD_DATA = "REGISTRATION_WIZARD_DATA";
export const REGISTRATION_WIZARD_ACTIVE_STEP = "REGISTRATION_WIZARD_ACTIVE_STEP";

// Retrieve data from LS
const localStorageWizardData: string = localStorage.getItem(REGISTRATION_WIZARD_DATA) ?? "";

export const initialWizardData: IWizardData = localStorageWizardData
    ? JSON.parse(localStorageWizardData)
    : wizardDataDefault;

// Retrieve active step from LS
export const initialActiveStep = +(localStorage.getItem(REGISTRATION_WIZARD_ACTIVE_STEP) || 1);
