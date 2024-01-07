import { render, screen } from '@testing-library/react';
import { WidgetContainer } from './WidgetContainer';
import { RegistrationWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/RegistrationWizardContext';
import { TBusinessType } from '@/widgets/AccountRegistrationWizard/model/types';

const value = {
  activeStep: 1,
  setActiveStep: () => {},
  wizardData: {
    firstName: 'Abc',
    lastName: 'Abc',
    email: '123@gmail.com',
    businessName: 'abc',
    businessSize: 0,
    businessType: 'smb' as TBusinessType,
    posIds: [],
    channelIds: [],
  },
  setWizardData: () => {},
  isNextStepEnabled: false,
  setIsNextStepEnabled: () => {},
  error: '',
  setError: () => {},
};

describe('WidgetContainer Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders the WidgetContainer component', () => {
    render(<WidgetContainer />);

    expect(screen.getByTestId('WidgetContainer')).toBeInTheDocument();
  });

  test('renders PersonalDetails for activeStep 1', () => {
    render(
      <RegistrationWizardContext.Provider value={value}>
        <WidgetContainer />
      </RegistrationWizardContext.Provider>,
    );

    expect(screen.getByText('Personal Details')).toBeInTheDocument();
  });

  test('renders BusinessDetails for activeStep 2', () => {
    render(
      <RegistrationWizardContext.Provider value={{ ...value, activeStep: 2 }}>
        <WidgetContainer />
      </RegistrationWizardContext.Provider>,
    );

    expect(screen.getByText('Business Details')).toBeInTheDocument();
  });

  test('renders PointOfSale for activeStep 3', () => {
    render(
      <RegistrationWizardContext.Provider value={{ ...value, activeStep: 3 }}>
        <WidgetContainer />
      </RegistrationWizardContext.Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders DeliveryChannel for activeStep 4', () => {
    render(
      <RegistrationWizardContext.Provider value={{ ...value, activeStep: 4 }}>
        <WidgetContainer />
      </RegistrationWizardContext.Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders Complete for activeStep 5', () => {
    render(
      <RegistrationWizardContext.Provider value={{ ...value, activeStep: 5 }}>
        <WidgetContainer />
      </RegistrationWizardContext.Provider>,
    );

    expect(screen.getByText('Finish the form')).toBeInTheDocument();
  });
});
