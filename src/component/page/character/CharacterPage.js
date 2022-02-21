import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Image } from '@mantine/core';

import CharacterInfoPage from './info/CharacterInfoPage';
import { convertElemToColor } from '../../../utils/converter/convertElemToColor';

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

  const style = `
    .character_container, 
    .pres_info_container .info_image > * {
      border: 7px solid ${convertElemToColor(characterData.element)};
    }
  `
  return (
    <div className='character_main_container'>
      <style>
        {style}
      </style>

      <Container className='character_container'>
        <CharacterInfoPage 
          data={characterData} />

        <div className='separator'>
          <Image
            src={require('../../../assets/images/horizontal_separator.png')} />
        </div>
      </Container>
    </div>
  );
};

export default CharacterPage;