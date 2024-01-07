import { ITileItem, TEntityName } from '@/widgets/AccountRegistrationWizard/model/types';

import cls from './TileItem.module.scss';
import { memo } from 'react';

interface TileItemProps {
  tile: ITileItem;
  entityName: TEntityName;
  defaultChecked: boolean;
}

export const TileItem = memo((props: TileItemProps) => {
  const { tile, entityName, defaultChecked } = props;

  return (
    <div className={cls.Tile}>
      <label>
        <input
          type='checkbox'
          value={tile.id}
          defaultChecked={defaultChecked}
          name={`${entityName}Ids`}
          id={`${entityName}${tile.id}`}
          aria-labelledby={`${entityName}-${tile.id}-img`}
        />

        <div className={cls.ImgContainer} data-testid='TileItem.Img'>
          <img
            className={cls.Img}
            src={tile.imageUrl}
            alt={tile.name}
            id={`${entityName}-${tile.id}-img`}
            aria-hidden
          />
        </div>
      </label>
    </div>
  );
});
