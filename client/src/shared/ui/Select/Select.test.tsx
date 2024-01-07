import { render, screen } from '@testing-library/react';

import { Select } from './Select';

describe('Select Component', () => {
  test('renders select with default value', () => {
    render(
      <Select>
        <option value='option'>option</option>
      </Select>,
    );

    const select = screen.getByTestId('Select');
    expect(select).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <Select>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
      </Select>,
    );

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });
});
