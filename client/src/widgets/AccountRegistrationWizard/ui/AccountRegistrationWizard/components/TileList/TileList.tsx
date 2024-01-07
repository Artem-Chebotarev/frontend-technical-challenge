import { useWizardContext } from '@/widgets/AccountRegistrationWizard/model/context/hooks/useWizardContext';
import { ITileItem, TEntityName } from '@/widgets/AccountRegistrationWizard/model/types';
import { TileItem } from '../TileItem/TileItem';

import cls from './TileList.module.scss';
import { useMemo } from 'react';

interface TileListProps {
  tiles: ITileItem[];
  entityName: TEntityName;
}

export const TileList = (props: TileListProps) => {
  const { tiles, entityName } = props;

  const { wizardData } = useWizardContext();

  // Check list if ids from Context
  const ids: number[] = wizardData[`${entityName}Ids`] ?? [];

  const memoizedTiles = useMemo(() => {
    return tiles.map((tile) => {
      const defaultChecked = ids.includes(tile.id);

      return (
        <TileItem
          key={tile.id}
          tile={tile}
          entityName={entityName}
          defaultChecked={defaultChecked}
          data-testid='TileList.Item'
        />
      );
    });
  }, [tiles]);

  return (
    <div className={cls.TilesContainer}>
      {tiles.length ? memoizedTiles : <p data-testid='TileList.Empty'>No results found</p>}
    </div>
  );
};
