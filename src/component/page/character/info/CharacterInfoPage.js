import React from 'react';

import { Image } from '@mantine/core';

import Info from './Info';
import ElementSelector from './ElementSelector';
import { findImage } from '../../../../utils/finder/findImage';

const CharacterInfoPage = ({ data, name, setName }) => {
  if (!data) {
    return (
      <div></div>
    )
  }

  return (
    <div className='info_container'>
      <div className='info_traveler_elements'>
        {
          name.startsWith("Traveler") &&
          <ElementSelector
            name={name} setName={setName} />
        }
      </div>

      <div className='pres_info_container'>
        <Info
          name={data.fullname} weapon={data.weapontype}
          rarity={data.rarity} elem={data.element} />


        <div className='info_image'>
          <Image
            src={data.images.namegachasplash ? findImage(data.images.namegachasplash) : data.images.portrait}
            height={255} width="none"
            fit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfoPage;