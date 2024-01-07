import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { UserInput } from '@/widgets/AccountRegistrationWizard/model/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { validationSchema } from '../validation/schema';

export const useBusinessDetails = () => {
  const { wizardData, setIsNextStepEnabled } = useWizardContext();

  const { businessName, businessSize, businessType } = wizardData;

  const defaultValues: UserInput['businessDetails'] = {
    businessName,
    businessSize,
    businessType,
  };

  const {
    register,
    formState: { errors },
  } = useForm<UserInput['businessDetails']>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const { ref: refBusinessName, ...restBusinessName } = register('businessName');
  const { ref: refBusinessSize, ...restBusinessSize } = register('businessSize');
  const { ref: refBusinessType, ...restBusinessType } = register('businessType');

  useEffect(() => {
    if (businessName && +businessSize > 0 && businessType) {
      setIsNextStepEnabled(true);
    } else {
      setIsNextStepEnabled(false);
    }
  }, [businessName, businessSize, businessType]);

  return {
    errors,
    refBusinessName,
    refBusinessSize,
    refBusinessType,
    restBusinessName,
    restBusinessSize,
    restBusinessType,
  };
};
