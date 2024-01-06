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
          wizardData: { firstName: 'Abc', lastName: 'Abc', email: '123@gmail.com' },
          setWizardData: () => {},
          isNextStepEnabled: false,
          setIsNextStepEnabled: () => {},
        }}
      >
        <Controls />
      </RegistrationWizardContext.Provider>,
    );

    const nextButtonElement = screen.getByText('Next Step');
    expect(nextButtonElement).toBeInTheDocument();
  });

  test('increments activeStep when Next Step button is clicked', () => {
    const setActiveStep = jest.fn();

    render(
      <RegistrationWizardContext.Provider
        value={{
          activeStep: 1,
          setActiveStep: setActiveStep,
          wizardData: { firstName: 'Abc', lastName: 'Abc', email: '123@gmail.com' },
          setWizardData: () => {},
          isNextStepEnabled: false,
          setIsNextStepEnabled: () => {},
        }}
      >
        <Controls />
      </RegistrationWizardContext.Provider>,
    );

    const nextButtonElement = screen.getByText('Next Step');
    fireEvent.click(nextButtonElement);

    expect(setActiveStep).toHaveBeenCalledTimes(1);
  });
});
