import { FormField } from '@/shared/ui/FormField';
import { useBusinessDetails } from './hooks/useBusinessDetails';
import { FormSelect } from '@/shared/ui/FormSelect';

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
      <legend>Business Details</legend>

      {/* Business name field */}
      <FormField
        ref={refBusinessName}
        id='firstName'
        label='Business name'
        placeholder='Business name'
        required
        error={Boolean(errors.businessName?.message)}
        errorMsg={errors.businessName?.message}
        {...restBusinessName}
      />

      {/* Business size field */}
      <FormField
        ref={refBusinessSize}
        id='businessType'
        label='Business size'
        placeholder='Business size'
        type='number'
        min='1'
        required
        error={Boolean(errors.businessSize?.message)}
        errorMsg={errors.businessSize?.message}
        {...restBusinessSize}
      />

      {/* Business type field */}
      <FormSelect
        ref={refBusinessType}
        id='businessName'
        label='Business type'
        type='select'
        required
        error={Boolean(errors.businessType?.message)}
        errorMsg={errors.businessType?.message}
        {...restBusinessType}
      >
        <option value='smb'>SMB</option>
        <option value='midmarket'>
          Midmarket
        </option>
        <option value='enterprise'>Enterprise</option>
      </FormSelect>
    </fieldset>
  );
};
