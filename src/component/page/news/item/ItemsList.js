import React from 'react';

import { Image, Tooltip } from '@mantine/core';
import { findImage } from '../../../../utils/finder/findImage';

const ItemsList = ({ rarity, items, finder }) => {
  if (!items) {
    return <></>
  }

  return (
    <div>
      {
        items.map((item, index) => {
          let itemName = item.name;

          let tmp = finder(itemName);
          let img = tmp.images.nameicon;
          if (tmp['2pc']) {
            img = tmp.images.nameflower
          } else if (tmp['1pc']) {
            img = tmp.images.namecirclet;
          }
          tmp = undefined;

          return (
            <Tooltip key={index}
            label={itemName} position="bottom"
            transition="slide-down"
            >
              <Image
                fit='contain'
                className={`${rarity ? `rarity_${item.rarity}` : ``} new_item`}
                width={100} height={100} withPlaceholder
                src={findImage(img)} alt={itemName}
              />
            </Tooltip>
          )
        })
      }
    </div>
  );
};

export default ItemsList;