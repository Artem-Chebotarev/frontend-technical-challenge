import { render, screen } from '@testing-library/react';
import { WidgetContainer } from './WidgetContainer';

describe('WidgetContainer Component', () => {
  test('renders the WidgetContainer component', () => {
    render(<WidgetContainer />);

    expect(screen.getByTestId('WidgetContainer')).toBeInTheDocument();
  });
});
