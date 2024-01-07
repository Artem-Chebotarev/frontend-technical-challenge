import { ITileItem } from '@/widgets/AccountRegistrationWizard/model/types';
import { render, screen } from '@testing-library/react';
import { TileList } from './TileList';

const tile: ITileItem = {
  id: 1,
  name: 'Square',
  imageUrl: 'https://placehold.co/600x400/orange/white?text=Square',
};

describe('TileList component', () => {
  test('renders TileList', () => {
    render(<TileList tiles={[tile]} entityName='pos' />);
    expect(screen.getByAltText(tile.name)).toBeInTheDocument();
  });

  test('renders nothing when there is no comment', () => {
    render(<TileList tiles={[]} entityName='pos' />);
    expect(screen.getByTestId('TileList.Empty')).toBeInTheDocument();
  });
});
