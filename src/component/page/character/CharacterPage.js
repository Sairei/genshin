import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Image, Tab, Tabs } from '@mantine/core';

import { convertElemToColor } from '../../../utils/converter/convertElemToColor';
import CharacterInfoPage from './info/CharacterInfoPage';
import AdvancementTab from './advancement/AdvancementTab';

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

    .tabs_sub_title,
    .character_tab_label {
      color: ${convertElemToColor(characterData.element)};
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

        <div className='character_tabs_container'>
          <Tabs grow color="gray"
            classNames={{
              root: 'character_tabs',
              body: 'character_tab_body',
              tabActive: 'character_tab_active',
              tabLabel: 'character_tab_label'
            }}
          >
            <Tab label="Avancement">
              <AdvancementTab name={name} />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default CharacterPage;