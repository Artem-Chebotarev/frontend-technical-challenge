import { FormField } from '@/shared/ui/FormField';

export const AccountRegistrationWizard = () => {
  return (
    <div data-testid='AccountRegistrationWizard'>
      <FormField label='First name' placeholder='First name' required error />
    </div>
  );
};
