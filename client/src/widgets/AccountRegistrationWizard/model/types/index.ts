export interface IPersonalDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export type TBusinessType = "smb" | "midmarket" | "enterprise";

export interface IBusinessDetails {
    businessName: string;
    businessSize: number;
    businessType: TBusinessType;
    posIds: number[],
    channelIds: number[],
}

export interface ITileItem {
    id: number;
    name: string;
    imageUrl: string;
}

export type TEntityName = 'pos' | 'channel';

export interface IWizardData extends IPersonalDetails, IBusinessDetails {}

export type TEventValue = string | number[];
