import { Image } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const genshindb = require('genshin-db');

const CharacterCard = ({ name }) => {
  const [characterData, setData] = useState();

  useEffect(() => {
    setData(genshindb.characters(name, { resultLanguage: "French" }));
  }, [name])

  if (!characterData) {
    return (
      <div></div>
    );
  }

  return (
    <div className='character_card'>
      {characterData.name}
      <Image
        src={characterData.images.icon} 
        height={130}
        width={200}
        fit="contain" />
    </div>
  );
};

export default CharacterCard;