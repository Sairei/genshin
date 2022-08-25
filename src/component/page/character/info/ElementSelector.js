import { Image } from '@mantine/core';
import React from 'react';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const ElementSelector = ({ setName }) => {
  const anemo = GenshinDB.getElement('anemo');
  const geo = GenshinDB.getElement('geo');
  const electro = GenshinDB.getElement('electro');
  const dendro = GenshinDB.getElement('dendro');

  const handleClick = (elt) => {
    setName(`Traveler (${elt.name})`);
  }

  return (
    <>
      <Image height={50} width={50} 
        className='traveler_elt'
        onClick={() => (handleClick(anemo))}
        src={anemo.images.wikia} />

      <Image height={50} width={50} 
        className='traveler_elt'
        onClick={() => (handleClick(geo))}
        src={geo.images.wikia} />

      <Image height={50} width={50} 
        className='traveler_elt'
        onClick={() => (handleClick(electro))}
        src={electro.images.wikia} />

      <Image height={50} width={50} 
        className='traveler_elt'
        onClick={() => (handleClick(dendro))}
        src={dendro.images.wikia} />
    </>
  );
};

export default ElementSelector;