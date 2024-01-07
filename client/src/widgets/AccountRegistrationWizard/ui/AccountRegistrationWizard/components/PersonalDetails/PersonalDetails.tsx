import { Field } from '@/shared/ui/Field';
import { usePersonalDetails } from './hooks/usePersonalDetails';
import { Input } from '@/shared/ui/Input';

export const PersonalDetails = () => {
  const { errors, refFirstName, refLastName, refEmail, restFirstName, restLastName, restEmail } =
    usePersonalDetails();

  return (
    <fieldset>
      {/* Info about active step */}
      <legend>Personal Details</legend>

      {/* First name field */}
      <Field
        label='First name'
        htmlFor='firstName'
        required
        error={Boolean(errors.firstName?.message)}
        errorMsg={errors.firstName?.message}
      >
        <Input ref={refFirstName} id='firstName' placeholder='First name' {...restFirstName} />
      </Field>

      {/* Last name field */}
      <Field
        label='Last name'
        htmlFor='lastName'
        required
        error={Boolean(errors.lastName?.message)}
        errorMsg={errors.lastName?.message}
      >
        <Input ref={refLastName} id='lastName' placeholder='Last name' {...restLastName} />
      </Field>

      {/* Email field */}
      <Field
        label='Email'
        htmlFor='email'
        required
        error={Boolean(errors.email?.message)}
        errorMsg={errors.email?.message}
      >
        <Input ref={refEmail} id='email' placeholder='Email' {...restEmail} />
      </Field>
    </fieldset>
  );
};
