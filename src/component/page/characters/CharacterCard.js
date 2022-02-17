import { Image } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const genshindb = require('genshin-db');

const CharacterCard = ({ name }) => {
  const nav = useNavigate();
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
      <div className="character_card_image" onClick={() => nav(`/character/${name}`)}>
        <Image
          src={characterData.images.icon}
          height={180}
          width={180}
          fit="contain" />
      </div>

      <div className='character_card_name'>
        {characterData.name}
      </div>
    </div>
  );
};

export default CharacterCard;