import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { IPersonalDetails } from '@/widgets/AccountRegistrationWizard/model/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { REG_EXP, validationSchema } from '../validation/schema';

export const usePersonalDetails = () => {
  const { wizardData, setIsNextStepEnabled } = useWizardContext();

  const { firstName, lastName, email } = wizardData;

  const defaultValues: IPersonalDetails = {
    firstName,
    lastName,
    email,
  };

  const {
    register,
    formState: { errors },
  } = useForm<IPersonalDetails>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const { ref: refFirstName, ...restFirstName } = register('firstName');
  const { ref: refLastName, ...restLastName } = register('lastName');
  const { ref: refEmail, ...restEmail } = register('email');

  useEffect(() => {
    if (firstName && lastName && REG_EXP.test(email)) {
      setIsNextStepEnabled(true);
    } else {
      setIsNextStepEnabled(false);
    }
  }, [email, firstName, lastName]);

  return { errors, refFirstName, refLastName, refEmail, restFirstName, restLastName, restEmail };
};
