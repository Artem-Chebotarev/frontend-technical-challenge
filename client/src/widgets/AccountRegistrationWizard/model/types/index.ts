interface IPersonalDetails {
    firstName: string;
    lastName: string;
    email: string;
}

type TBusinessType = "smb" | "midmarket" | "enterprise";

interface IBusinessDetails {
    businessName: string;
    businessSize: number;
    businessType: string
}

export interface UserInput {
    personalDetails: IPersonalDetails;
    businessDetails: IBusinessDetails;
}

export interface IWizardData {
    firstName: string;
    lastName: string;
    email: string;
    businessName: string;
    businessSize: number;
    businessType: TBusinessType;
}
