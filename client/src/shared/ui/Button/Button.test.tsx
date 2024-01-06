import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Test render of the button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test button with theme', () => {
    render(<Button theme={ButtonTheme.DISABLED_GREY}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('disabledGrey');

    // to see what was rendered in the console
    screen.debug();
  });
});
