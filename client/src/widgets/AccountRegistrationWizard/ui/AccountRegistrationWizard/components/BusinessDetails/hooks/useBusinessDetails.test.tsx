import { renderHook } from '@testing-library/react';
import { RegistrationWizardProvider } from '@/widgets/AccountRegistrationWizard/model/context/RegistrationWizardProvider';
import { ReactNode } from 'react';
import { useBusinessDetails } from './useBusinessDetails';

jest.mock('@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext', () => ({
  useWizardContext: jest.fn(() => ({
    wizardData: {
      businessName: '',
      businessSize: 0,
      businessType: 'smb',
    },
    setIsNextStepEnabled: jest.fn(),
  })),
}));

describe('useBusinessDetails', () => {
  test('returns correct values', () => {
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <RegistrationWizardProvider>
        <form>{children}</form>
      </RegistrationWizardProvider>
    );

    const { result } = renderHook(() => useBusinessDetails(), { wrapper: Wrapper });
    const {
      errors,
      refBusinessName,
      refBusinessSize,
      refBusinessType,
      restBusinessName,
      restBusinessSize,
      restBusinessType,
    } = result.current;

    expect(errors).toBeDefined();
    expect(refBusinessName).toBeDefined();
    expect(refBusinessSize).toBeDefined();
    expect(refBusinessType).toBeDefined();
    expect(restBusinessName).toBeDefined();
    expect(restBusinessSize).toBeDefined();
    expect(restBusinessType).toBeDefined();
  });
});
