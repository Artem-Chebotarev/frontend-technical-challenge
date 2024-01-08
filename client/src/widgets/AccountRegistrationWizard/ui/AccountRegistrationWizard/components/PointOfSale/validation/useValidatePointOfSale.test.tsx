import { renderHook } from '@testing-library/react';
import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { useValidatePointOfSale } from './useValidatePointOfSale';

jest.mock('@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext');

describe('useValidatePointOfSale hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('enables next step when posIds has items', () => {
    const mockWizardContext = {
      wizardData: { posIds: [1, 2] },
      setIsNextStepEnabled: jest.fn(),
    };

    (useWizardContext as jest.Mock).mockReturnValue(mockWizardContext);

    renderHook(() => useValidatePointOfSale());

    expect(mockWizardContext.setIsNextStepEnabled).toHaveBeenCalledWith(true);
  });

  test('disables next step when posIds is empty', () => {
    const mockWizardContext = {
      wizardData: { posIds: [] },
      setIsNextStepEnabled: jest.fn(),
    };

    (useWizardContext as jest.Mock).mockReturnValue(mockWizardContext);

    renderHook(() => useValidatePointOfSale());

    expect(mockWizardContext.setIsNextStepEnabled).toHaveBeenCalledWith(false);
  });
});
