import { RegistrationWizardProvider } from '../../model/context/RegistrationWizardProvider';
import { WidgetContainer } from './components/WidgetContainer/WidgetContainer';

export const AccountRegistrationWizard = () => {
  return (
    <RegistrationWizardProvider>
      <WidgetContainer />
    </RegistrationWizardProvider>
  );
};
