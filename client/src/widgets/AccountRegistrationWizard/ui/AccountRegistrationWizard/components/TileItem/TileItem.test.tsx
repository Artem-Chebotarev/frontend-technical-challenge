import { ITileItem } from '@/widgets/AccountRegistrationWizard/model/types';
import { render, screen } from '@testing-library/react';
import { TileItem } from './TileItem';

const tile: ITileItem = {
  id: 1,
  name: 'Square',
  imageUrl: 'https://placehold.co/600x400/orange/white?text=Square',
};

describe('TileItem component', () => {
  test('render TileItem', () => {
    render(<TileItem tile={tile} entityName='pos' defaultChecked />);
    expect(screen.getByTestId('TileItem.Img')).toBeInTheDocument();
  });
});
