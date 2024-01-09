import { senData } from '@/shared/lib/sendData/sendData';
import { wizardDataDefault } from '@/widgets/AccountRegistrationWizard/model/consts/wizard';
import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { IWizardData, TEventValue } from '@/widgets/AccountRegistrationWizard/model/types';

export const useFormData = () => {
    const { activeStep, setActiveStep, wizardData, setWizardData, setIsLoading, setError } =
    useWizardContext();
    // Handler onChange fields in form
  const handleFormOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, type } = target;

    let value: TEventValue = target.value;

    if (type === 'checkbox') {
      // Get filed of wizard data by name
      const entitiesIds = wizardData[name as keyof IWizardData];

      // Check whether entitiesIds is array
      if (Array.isArray(entitiesIds)) {
        // Checkbox logic
        value = entitiesIds.includes(+value)
          ? entitiesIds.filter((elem) => elem !== +value)
          : [...entitiesIds, +value];
      }
    }

    // Change wizard data
    setWizardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler onSubmit form
  const sendWizardData = async () => {
    try {
      setIsLoading(true);
      // Send collected data to API
      const status = await senData('account', wizardData);

      if (status === 200) {
        // Reset wizard data and active step to default
        setActiveStep(1);
        setWizardData(wizardDataDefault);
      } else {
        setError('Failed to send data please try again later');
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message);

        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendWizardData();
  };

  return {activeStep, handleFormOnChange, handleFormOnSubmit};
}
