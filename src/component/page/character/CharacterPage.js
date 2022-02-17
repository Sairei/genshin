import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Image } from '@mantine/core';
import CharacterInfoPage from './info/CharacterInfoPage';

const genshindb = require('genshin-db');

const CharacterPage = () => {
  const { name } = useParams()
  const [characterData, setData] = useState();

  useEffect(() => {
    setData(genshindb.characters(name, { resultLanguage: "French" }));
  }, [name])

  console.log(characterData);

  return (
    <div className='character_main_container'>
      <Container className='character_container'>
        <CharacterInfoPage />

        <Image
          className='charac_info_image'
          src={characterData.images.cover2}
          fit='contain'
        />
      </Container>
    </div>
  );
};

export default CharacterPage;