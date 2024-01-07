import { IWizardData } from "../types";

export const wizardDataDefault: IWizardData = {
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    businessSize: 0,
    businessType: 'midmarket',
    posIds: [],
    channelIds: [],
};

export const MAX_STEPS = 5;
