interface IPersonalDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserInput {
    personalDetails: IPersonalDetails;
}

export interface IWizardData {
    firstName: string;
    lastName: string;
    email: string;
}
