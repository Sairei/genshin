import React from 'react';

import { Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import { Link } from 'react-router-dom';
import NewFeature from '../../../UI/NewFeature';

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
                <Link to={`/equipment/weapon/${elt.name}`}>
                  <div className='div_image'>
                    <NewFeature
                      version={elt.version} size={40} />

                    <Image
                      className={`image rarity_${elt.rarity}`}
                      width={75} height={75}
                      src={findImage(elt.images.nameicon)}
                    />
                  </div>
                  <div className='name_desc vertical_align_text'>
                    <div className='name'>
                      {elt.name}
                    </div>
                    <div className='description'>
                      {elt.description}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })
      }
    </ul>
  );
};

export default WeaponsByType;