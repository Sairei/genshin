import React from 'react';

import { Image } from '@mantine/core';

import Info from './Info';
import { findImage } from '../../../../utils/finder/findImage';

const CharacterInfoPage = ({ data }) => {
  if (!data) {
    return (
      <div></div>
    )
  }

  console.log(data.images);
  return (
    <div className='pres_info_container'>
      <Info 
        name={data.fullname} weapon={data.weapontype}
        rarity={data.rarity} elem={data.element} />


      <div className='info_image'>
        <Image
          src={data.images.namegachasplash ? findImage(data.images.namegachasplash) : data.images.portrait}
          height={255}
          fit='contain'
        />
      </div>
    </div>
  );
};

export default CharacterInfoPage;