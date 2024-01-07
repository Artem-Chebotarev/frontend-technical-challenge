import { render, screen } from '@testing-library/react';
import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { Complete } from './Complete';

jest.mock('@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext');

describe('Complete component', () => {
  test('renders complete form message', () => {
    // Mock the useWizardContext hook to return no error
    (useWizardContext as jest.Mock).mockReturnValue({ error: '' });

    render(<Complete />);

    // Assert that the "Finish the form" legend is present
    expect(screen.getByText('Finish the form')).toBeInTheDocument();

    // Assert that the "Please check the previous form steps..." message is present
    expect(
      screen.getByText(
        'Please check the previous form steps and send your data by clicking Done button',
      ),
    ).toBeInTheDocument();

    // Assert that the error message is not present
    expect(screen.queryByText('Your error message')).toBeNull();
  });

  test('renders error message when there is an error', () => {
    const errorMessage = 'Your error message';

    // Mock the useWizardContext hook to return an error
    (useWizardContext as jest.Mock).mockReturnValue({ error: errorMessage });

    render(<Complete />);

    // Assert that the error message is present
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
