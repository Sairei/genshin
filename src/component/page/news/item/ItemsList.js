import React from 'react';

import { Image, Tooltip } from '@mantine/core';
import { findImage } from '../../../../utils/finder/findImage';

const ItemsList = ({ items, finder }) => {
  if (!items) {
    return <></>
  }

  return (
    <div>
      {
        items.map((art, index) => {
          let itemName = art.name;

          let tmp = finder(itemName);
          let img = tmp.images.nameicon;
          if (tmp['2pc']) {
            img = tmp.images.nameflower
          } else if (tmp['1pc']) {
            img = tmp.images.namecirclet;
          }

          return (
            <Tooltip key={index}
            label={itemName} position="bottom"
            transition="slide-down"
            >
              <Image
                fit='contain'
                className={`new_artifact`}
                width={100} height={100}
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