import * as yup from 'yup';

export const validationSchema = yup.object({
  businessName: yup
    .string()
    .required('Please complete this required field.')
    .max(12, 'Business name is too long'),
  businessSize: yup
    .number()
    .transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value)
    .required('Please complete this required field.')
    .positive('Business size must be greater than 0'),
  businessType: yup
    .string()
    .required('Please complete this required field.')
    .oneOf(['smb', 'midmarket', 'enterprise'], 'Please enter a valid business type')
});
