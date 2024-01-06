import { render, fireEvent, screen } from '@testing-library/react';

import { FormField } from './FormField';

describe('FormField Component', () => {
  test('renders label and input with default values', () => {
    render(<FormField label='Default label' id={'default'} />);

    const label = screen.getByLabelText('Default label');
    const input = screen.getByTestId('FormField');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  test('renders required indicator when required prop is true', () => {
    render(<FormField label='Required field' id={'required'} required />);

    const label = screen.getByLabelText('Required field*');

    expect(label).toBeInTheDocument();
  });

  test('triggers onChange callback when input is changed', () => {
    type TestElement = Document | Element | Window | Node;

    function hasInputValue(event: TestElement, inputValue: string) {
      return screen.getByDisplayValue(inputValue) === event;
    }

    render(<FormField label='Default label' />);

    const input = screen.getByTestId('FormField');

    fireEvent.change(input, { target: { value: 'John' } });

    expect(hasInputValue(input, 'John')).toBe(true);
  });

  test('renders error message when error prop is true', () => {
    render(<FormField label='Default label' error />);

    const errorSpan = screen.getByTestId('FieldError');

    expect(errorSpan).toBeInTheDocument();
    expect(errorSpan).toHaveTextContent('Please complete this required field.');
  });
});
