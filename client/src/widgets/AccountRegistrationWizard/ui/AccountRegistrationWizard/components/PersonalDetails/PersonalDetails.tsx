import { FormField } from '@/shared/ui/FormField';
import { usePersonalDetails } from './hooks/usePersonalDetails';

export const PersonalDetails = () => {
  const { errors, refFirstName, refLastName, refEmail, restFirstName, restLastName, restEmail } =
    usePersonalDetails();

  return (
    <fieldset>
      {/* Info about active step */}
      <legend>Personal Details</legend>

      {/* First name field */}
      <FormField
        ref={refFirstName}
        id='firstName'
        label='First name'
        placeholder='First name'
        required
        error={Boolean(errors.firstName?.message)}
        errorMsg={errors.firstName?.message}
        {...restFirstName}
      />

      {/* Last name field */}
      <FormField
        ref={refLastName}
        id='lastName'
        label='Last name'
        placeholder='Last name'
        required
        error={Boolean(errors.lastName?.message)}
        errorMsg={errors.lastName?.message}
        {...restLastName}
      />

      {/* Email field */}
      <FormField
        ref={refEmail}
        id='email'
        label='Email'
        placeholder='Email'
        required
        error={Boolean(errors.email?.message)}
        errorMsg={errors.email?.message}
        {...restEmail}
      />
    </fieldset>
  );
};
