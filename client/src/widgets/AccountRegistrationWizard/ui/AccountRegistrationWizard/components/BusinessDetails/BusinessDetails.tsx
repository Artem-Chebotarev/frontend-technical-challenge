import { Field } from '@/shared/ui/Field';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { useBusinessDetails } from './hooks/useBusinessDetails';

export const BusinessDetails = () => {
  const {
    errors,
    refBusinessName,
    refBusinessSize,
    refBusinessType,
    restBusinessName,
    restBusinessSize,
    restBusinessType,
  } = useBusinessDetails();

  return (
    <fieldset>
      {/* Info about active step */}
      <legend data-testid='BusinessDetails.Legend'>Business Details</legend>

      {/* Business name field */}
      <Field
        label='Business name'
        htmlFor='businessName'
        required
        error={Boolean(errors.businessName?.message)}
        errorMsg={errors.businessName?.message}
      >
        <Input
          ref={refBusinessName}
          id='businessName'
          placeholder='Business name'
          {...restBusinessName}
          data-testid='BusinessDetails.BusinessNameInput'
        />
      </Field>

      {/* Business size field */}
      <Field
        label='Business size'
        htmlFor='businessSize'
        required
        error={Boolean(errors.businessSize?.message)}
        errorMsg={errors.businessSize?.message}
      >
        <Input
          ref={refBusinessSize}
          id='businessSize'
          placeholder='Business size'
          type='number'
          min='1'
          {...restBusinessSize}
          data-testid='BusinessDetails.BusinessSizeInput'
        />
      </Field>

      {/* Business type field */}
      <Field
        label='Business type'
        htmlFor='businessType'
        required
        error={Boolean(errors.businessType?.message)}
        errorMsg={errors.businessType?.message}
      >
        <Select
          ref={refBusinessType}
          id='businessType'
          placeholder='Business size'
          {...restBusinessType}
          data-testid='BusinessDetails.BusinessTypeSelect'
        >
          <option value='smb'>SMB</option>
          <option value='midmarket'>Midmarket</option>
          <option value='enterprise'>Enterprise</option>
        </Select>
      </Field>
    </fieldset>
  );
};
