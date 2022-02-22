import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Image, Tab, Tabs } from '@mantine/core';

import CharacterStyle from './CharacterStyle';
import CharacterInfoPage from './info/CharacterInfoPage';
import AdvancementTab from './advancement/AdvancementTab';

const genshindb = require('genshin-db');

const CharacterPage = () => {
  const { name } = useParams()
  const [characterData, setData] = useState();
  const [talentData, setTalentData] = useState();

  useEffect(() => {
    setData(genshindb.characters(name, { resultLanguage: "French" }));

    if (name !== 'Aether' | name !== 'Lumine') {
      setTalentData(genshindb.talents(name, { resultLanguage: "French" }));
    }
  }, [name])

  if (!characterData) {
    return (
      <div></div>
    )
  }

  return (
    <div className='character_main_container'>
      <CharacterStyle elt={characterData.element} />

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
              tabLabel: 'character_tabs_label'
            }}
          >
            <Tab label="Avancement">
              <AdvancementTab name={name}
                character={characterData} />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default CharacterPage;