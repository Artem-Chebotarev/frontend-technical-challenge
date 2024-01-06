import * as yup from 'yup';

// Email validation RegExp
export const REG_EXP = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/i);

export const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('Please complete this required field.')
    .max(12, 'First name is too long'),
  lastName: yup
    .string()
    .required('Please complete this required field.')
    .max(12, 'Last name is too long'),
  email: yup
    .string()
    .required('Please complete this required field.')
    .matches(REG_EXP, 'Please enter a valid email address'),
});
