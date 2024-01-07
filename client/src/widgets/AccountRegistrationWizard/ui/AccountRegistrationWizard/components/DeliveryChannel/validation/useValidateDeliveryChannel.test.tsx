import { renderHook } from '@testing-library/react-hooks';
import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { useValidateDeliveryChannel } from './useValidateDeliveryChannel';

jest.mock('@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext');

describe('useValidateDeliveryChannel hook', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('enables next step when channelIds has items', () => {
    const mockWizardContext = {
      wizardData: { channelIds: [1, 2] },
      setIsNextStepEnabled: jest.fn(),
    };

    (useWizardContext as jest.Mock).mockReturnValue(mockWizardContext);

    renderHook(() => useValidateDeliveryChannel());

    expect(mockWizardContext.setIsNextStepEnabled).toHaveBeenCalledWith(true);
  });

  test('disables next step when channelIds is empty', () => {
    const mockWizardContext = {
      wizardData: { channelIds: [] },
      setIsNextStepEnabled: jest.fn(),
    };

    (useWizardContext as jest.Mock).mockReturnValue(mockWizardContext);

    renderHook(() => useValidateDeliveryChannel());

    expect(mockWizardContext.setIsNextStepEnabled).toHaveBeenCalledWith(false);
  });
});
