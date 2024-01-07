import { render, screen } from '@testing-library/react';

import { Field } from './Field';
import { Input } from '../Input';

describe('Field Component', () => {
  test('renders label with default values', () => {
    render(
      <Field label='Default label' htmlFor={'input'}>
        <Input id='input' />
      </Field>,
    );

    const label = screen.getByLabelText('Default label');

    expect(label).toBeInTheDocument();
  });

  test('renders required indicator when required prop is true', () => {
    render(
      <Field label='Required field' htmlFor={'input'} required>
        <Input id='input' />
      </Field>,
    );

    const label = screen.getByLabelText('Required field*');

    expect(label).toBeInTheDocument();
  });

  test('renders error message when error prop is true', () => {
    render(
      <Field label='Default label' htmlFor={'default'} error>
        Default
      </Field>,
    );

    const errorSpan = screen.getByTestId('FieldError');

    expect(errorSpan).toBeInTheDocument();
    expect(errorSpan).toHaveTextContent('Please complete this required field.');
  });
});
