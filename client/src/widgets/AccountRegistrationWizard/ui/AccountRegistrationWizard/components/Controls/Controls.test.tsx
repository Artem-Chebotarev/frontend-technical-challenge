import { render, fireEvent, screen } from '@testing-library/react';
import { Controls } from './Controls';
import { RegistrationWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/RegistrationWizardContext';

describe('Controls Component', () => {
  test('renders the Controls component', () => {
    const setActiveStep = jest.fn();

    render(
      <RegistrationWizardContext.Provider
        value={{
          activeStep: 1,
          setActiveStep: setActiveStep,
          wizardData: {
            firstName: 'Abc',
            lastName: 'Abc',
            email: '123@gmail.com',
            businessName: 'abc',
            businessSize: 0,
            businessType: 'smb',
          },
          setWizardData: () => {},
          isNextStepEnabled: false,
          setIsNextStepEnabled: () => {},
        }}
      >
        <Controls />
      </RegistrationWizardContext.Provider>,
    );

    const nextButton = screen.getByText('Next Step');
    expect(nextButton).toBeInTheDocument();
  });

  test('increments activeStep when Next Step button is clicked', () => {
    const setActiveStep = jest.fn();

    render(
      <RegistrationWizardContext.Provider
        value={{
          activeStep: 1,
          setActiveStep: setActiveStep,
          wizardData: {
            firstName: 'Abc',
            lastName: 'Abc',
            email: '123@gmail.com',
            businessName: 'abc',
            businessSize: 0,
            businessType: 'smb',
          },
          setWizardData: () => {},
          isNextStepEnabled: false,
          setIsNextStepEnabled: () => {},
        }}
      >
        <Controls />
      </RegistrationWizardContext.Provider>,
    );

    const nextButton = screen.getByText('Next Step');
    fireEvent.click(nextButton);

    expect(setActiveStep).toHaveBeenCalledTimes(1);
  });

  test('decrements activeStep when Prev Step button is clicked', () => {
    const setActiveStep = jest.fn();

    render(
      <RegistrationWizardContext.Provider
        value={{
          activeStep: 2,
          setActiveStep: setActiveStep,
          wizardData: {
            firstName: 'Abc',
            lastName: 'Abc',
            email: '123@gmail.com',
            businessName: 'abc',
            businessSize: 0,
            businessType: 'smb',
          },
          setWizardData: () => {},
          isNextStepEnabled: false,
          setIsNextStepEnabled: () => {},
        }}
      >
        <Controls />
      </RegistrationWizardContext.Provider>,
    );

    const prevButton = screen.getByText('Prev Step');
    fireEvent.click(prevButton);

    expect(setActiveStep).toHaveBeenCalledTimes(1);
  });
});
