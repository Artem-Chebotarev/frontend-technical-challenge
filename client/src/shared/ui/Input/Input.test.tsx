import { render, fireEvent, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input Component', () => {
  test('renders input with default value', () => {
    render(<Input id={'default'} />);

    const input = screen.getByTestId('Input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  test('triggers onChange callback when input is changed', () => {
    type TestElement = Document | Element | Window | Node;

    function hasInputValue(event: TestElement, inputValue: string) {
      return screen.getByDisplayValue(inputValue) === event;
    }

    render(<Input />);

    const input = screen.getByTestId('Input');

    fireEvent.change(input, { target: { value: 'John' } });

    expect(hasInputValue(input, 'John')).toBe(true);
  });
});
