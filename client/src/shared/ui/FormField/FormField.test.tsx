import { render, fireEvent, screen } from '@testing-library/react';

import { FormField } from './FormField';

describe('FormField', () => {
  test('render FormField', () => {
    render(<FormField label='Default Label' />);
    expect(screen.getByTestId('FormField')).toBeInTheDocument();
  });

  test('change FormField', () => {
    type TestElement = Document | Element | Window | Node;

    function hasInputValue(event: TestElement, inputValue: string) {
      return screen.getByDisplayValue(inputValue) === event;
    }

    render(<FormField label='Default Label' />);

    const input = screen.getByTestId('FormField');

    fireEvent.change(input, { target: { value: 'John' } });

    expect(hasInputValue(input, 'John')).toBe(true);
  });
});
