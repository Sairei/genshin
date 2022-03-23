import React, { useEffect, useState } from 'react';

import { Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const WeaponPage = () => {
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    let list = [];

    genshindb.weapons('name', { matchCategories: true }).map((elt) => {
      let o = genshindb.weapons(elt, { resultLanguage: 'French' });
      o['link'] = elt;
      list.push(o);

      return '';
    });

    setWeapons(list);
  }, []);

  return (
    <div className='weapon_container'>
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
    </div>
  );
};

export default WeaponPage;