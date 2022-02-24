import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Image, ScrollArea, Tab, Tabs } from '@mantine/core';

import CharacterStyle from './CharacterStyle';
import CharacterInfoPage from './info/CharacterInfoPage';
import AdvancementTab from './advancement/AdvancementTab';
import SkillTab from './skill/SkillTab';
import PassiveTab from './passive/PassiveTab';
import ConstellationTab from './constellation/ConstellationTab';

const genshindb = require('genshin-db');

const CharacterPage = () => {
  const { name } = useParams()
  const [searchName, setName] = useState();
  const [characterData, setData] = useState();
  const [talentData, setTalentData] = useState();
  const [constellationData, setConstellationData] = useState();

  useEffect(() => {
    setName(name);

    setData(genshindb.characters(name, { resultLanguage: "French" }));
    
    if (name !== 'Aether' | name !== 'Lumine') {
      setName('Traveler (anemo)');
    }
    
  }, [name])

  useEffect(() => {
    setTalentData(genshindb.talents(searchName, { resultLanguage: "French" }));
    setConstellationData(genshindb.constellations(searchName, { resultLanguage: "French" }));
  }, [searchName])

  if (!characterData) {
    return (
      <div></div>
    )
  }

  return (
    <div className='character_main_container'>
      <CharacterStyle elt={characterData.element} />

      <Container className='character_container'>
        <ScrollArea>
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
                tabsList: 'tabs_list',
                body: 'character_tab_body',
                tabActive: 'character_tab_active',
                tabLabel: 'character_tabs_label'
              }}
            >
              <Tab label="Avancement">
                <AdvancementTab name={name}
                  character={characterData} />
              </Tab>

              <Tab label="Compétences">
                <SkillTab name={searchName}
                  talent={talentData} />
              </Tab>

              <Tab label="Passifs">
                <PassiveTab
                  talent={talentData} />
              </Tab>

              <Tab label="Constellations">
                <ConstellationTab elt={characterData.element} name={name}
                  constellation={constellationData} />
              </Tab>
            </Tabs>
          </div>
        </ScrollArea>
      </Container>
    </div>
  );
};

export default CharacterPage;