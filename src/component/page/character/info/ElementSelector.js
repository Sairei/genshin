import { Image } from '@mantine/core';
import React from 'react';

const genshindb = require('genshin-db');

const ElementSelector = ({ name, setName }) => {
  const anemo = genshindb.elements('anemo');
  const geo = genshindb.elements('geo');
  const electro = genshindb.elements('electro');

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
    </>
  );
};

export default ElementSelector;