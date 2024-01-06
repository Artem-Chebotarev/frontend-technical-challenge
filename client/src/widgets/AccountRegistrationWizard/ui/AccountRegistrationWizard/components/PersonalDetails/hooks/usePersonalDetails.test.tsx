import { renderHook } from '@testing-library/react';
import { usePersonalDetails } from './usePersonalDetails';
import { RegistrationWizardProvider } from '@/widgets/AccountRegistrationWizard/model/context/RegistrationWizardProvider';
import { ReactNode } from 'react';

jest.mock('@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext', () => ({
  useWizardContext: jest.fn(() => ({
    wizardData: {
      firstName: '',
      lastName: '',
      email: '',
    },
    setIsNextStepEnabled: jest.fn(),
  })),
}));

describe('usePersonalDetails', () => {
  test('returns correct values', () => {
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <RegistrationWizardProvider>
        <form>{children}</form>
      </RegistrationWizardProvider>
    );

    const { result } = renderHook(() => usePersonalDetails(), { wrapper: Wrapper });
    const { errors, refFirstName, refLastName, refEmail, restFirstName, restLastName, restEmail } =
      result.current;

    expect(errors).toBeDefined();
    expect(refFirstName).toBeDefined();
    expect(refLastName).toBeDefined();
    expect(refEmail).toBeDefined();
    expect(restFirstName).toBeDefined();
    expect(restLastName).toBeDefined();
    expect(restEmail).toBeDefined();
  });
});
