import { render, screen } from '@testing-library/react';
import { AccountRegistrationWizard } from './AccountRegistrationWizard';

describe('AccountRegistrationWizard widget', () => {
  test('AccountRegistrationWizard render', () => {
    render(<AccountRegistrationWizard />);

    expect(screen.getByTestId('AccountRegistrationWizard')).toBeInTheDocument();
  });
});
