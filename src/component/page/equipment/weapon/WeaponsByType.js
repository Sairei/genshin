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
        weapons.map((elt) => {
          return (
            <li key={elt.name} >
              <Image
                width={50} height={50}
                src={findImage(elt.images.nameicon)}
              />
              <div className='vertical_align_text'>
                {elt.name}
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

export default WeaponsByType;