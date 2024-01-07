import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';

import cls from './Complete.module.scss';

export const Complete = () => {
  const { error } = useWizardContext();

  return (
    <fieldset>
      {/* Info about active step */}
      <legend>Finish the form</legend>

      {/* Additional text */}
      <p>Please check the previous form steps and send your data by clicking Done button</p>
      {error && <p className={cls.ErrorText}>{error}</p>}
    </fieldset>
  );
};
