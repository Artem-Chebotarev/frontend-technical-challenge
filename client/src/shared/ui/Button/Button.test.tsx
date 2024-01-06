import { fireEvent, render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button Component', () => {
  test('renders button with default theme', () => {
    render(<Button>Test</Button>);

    const button = screen.getByText('Test');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('Button', 'activeGreen');
  });

  test('renders button with disabled style when disabled prop is true', () => {
    render(
      <Button theme={ButtonTheme.DISABLED_GREY} disabled>
        Test
      </Button>,
    );

    const button = screen.getByText('Test');

    expect(button).toHaveClass('Button', 'disabledGrey', 'disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  test('renders button with fullWidth style when fullWidth prop is true', () => {
    render(<Button fullWidth>Test</Button>);

    expect(screen.getByText('Test')).toHaveClass('Button', 'activeGreen', 'fullWidth');
  });

  test('applies additional className to the button', () => {
    render(<Button className='customClass'>Test</Button>);

    expect(screen.getByText('Test')).toHaveClass('Button', 'activeGreen', 'customClass');
  });

  test('handles click event when clicked', () => {
    const onClickMock = jest.fn();

    render(<Button onClick={onClickMock}>Test</Button>);

    const button = screen.getByText('Test');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('renders button with a different theme', () => {
    render(<Button theme={ButtonTheme.DISABLED_GREY}>Test</Button>);

    expect(screen.getByText('Test')).toHaveClass('Button', 'disabledGrey');
  });
});
