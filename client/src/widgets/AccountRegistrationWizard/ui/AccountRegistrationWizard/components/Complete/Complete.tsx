import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';

export const Complete = () => {
  const { error } = useWizardContext();

  return (
    <fieldset>
      {/* Info about active step */}
      <legend>Finish the form</legend>

      {/* Additional text */}
      <p>Please check the previous form steps and send your data by clicking Done button</p>
      {error && <p className='ErrorText'>{error}</p>}
    </fieldset>
  );
};
