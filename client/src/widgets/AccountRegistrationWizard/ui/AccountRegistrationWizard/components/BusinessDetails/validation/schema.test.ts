import { validationSchema } from "./schema";


describe('Business Details Validation Schema', () => {
  test('validates a valid business input', async () => {
    const validBusinessData = {
      businessName: 'My Business',
      businessSize: 10,
      businessType: 'smb',
    };

    await expect(validationSchema.validate(validBusinessData)).resolves.toBe(validBusinessData);
  });

  test('throws an error for an empty business name', async () => {
    const invalidBusinessData = {
      businessName: '',
      businessSize: 10,
      businessType: 'smb',
    };

    await expect(validationSchema.validate(invalidBusinessData)).rejects.toThrow(
      'Please complete this required field.'
    );
  });

  test('throws an error for a business size less than or equal to 0', async () => {
    const invalidBusinessData = {
      businessName: 'My Business',
      businessSize: 0,
      businessType: 'smb',
    };

    await expect(validationSchema.validate(invalidBusinessData)).rejects.toThrow(
      'Business size must be greater than 0'
    );
  });

  test('throws an error for an invalid business type', async () => {
    const invalidBusinessData = {
      businessName: 'My Business',
      businessSize: 10,
      businessType: 'invalidType',
    };

    await expect(validationSchema.validate(invalidBusinessData)).rejects.toThrow(
      'Please enter a valid business type'
    );
  });
});
