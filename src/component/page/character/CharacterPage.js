import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container } from '@mantine/core';

import CharacterInfoPage from './info/CharacterInfoPage';

const genshindb = require('genshin-db');

const CharacterPage = () => {
  const { name } = useParams()
  const [characterData, setData] = useState();

  useEffect(() => {
    setData(genshindb.characters(name, { resultLanguage: "French" }));
  }, [name])

  console.log(characterData);

  if (!characterData) {
    return (
      <div></div>
    )
  }

  return (
    <div className='character_main_container'>
      <Container className='character_container'>
        <CharacterInfoPage 
          data={characterData} />
      </Container>
    </div>
  );
};

export default CharacterPage;