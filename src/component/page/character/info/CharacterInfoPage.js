import React from 'react';

import { Image } from '@mantine/core';

import Info from './Info';
import { findImage } from '../../../../utils/finder/findImage';

const CharacterInfoPage = ({ data, name, setName }) => {
  if (!data) {
    return (
      <div></div>
    )
  }

  console.log(name);
  return (
    <div className='info_container'>
      <div className='info_traveler_element'>
        {
          name.startsWith("Traveler") &&
          <>
            <div>anemo</div>
            <div>geo</div>
            <div>electro</div>
          </>
        }
      </div>

      <div className='pres_info_container'>
        <Info
          name={data.fullname} weapon={data.weapontype}
          rarity={data.rarity} elem={data.element} />


        <div className='info_image'>
          <Image
            src={data.images.namegachasplash ? findImage(data.images.namegachasplash) : data.images.portrait}
            height={255}
            fit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoPage;