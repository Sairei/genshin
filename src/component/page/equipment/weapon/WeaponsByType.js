import React from 'react';

import { Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

const WeaponsByType = ({ weapons }) => {
  if (!weapons) {
    return (
      <div></div>
    );
  }

  return (
    <ul>
      {
        weapons
          .sort((a, b) => a.rarity - b.rarity)
          .map((elt) => {
            return (
              <li key={elt.name} >
                <div>
                  <Image
                    className={`image rarity_${elt.rarity}`}
                    width={75} height={75}
                    src={findImage(elt.images.nameicon)}
                  />
                  <div className='name vertical_align_text'>
                    {elt.name}
                  </div>
                </div>
              </li>
            );
          })
      }
    </ul>
  );
};

export default WeaponsByType;