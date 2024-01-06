import { Button, ButtonTheme } from '@/shared/ui/Button';
import { FormField } from '@/shared/ui/FormField';

export const AccountRegistrationWizard = () => {
  return (
    <div data-testid='AccountRegistrationWizard'>
      <FormField label='First name' placeholder='First name' required error />
      <Button>Next step</Button>
      <Button disabled theme={ButtonTheme.DISABLED_GREY}>
        Next step
      </Button>
    </div>
  );
};
