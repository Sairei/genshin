import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Image, ScrollArea, Tab, Tabs } from '@mantine/core';

import CharacterStyle from './CharacterStyle';
import CharacterInfoPage from './info/CharacterInfoPage';
import AdvancementTab from './advancement/AdvancementTab';
import SkillTab from './skill/SkillTab';
import PassiveTab from './passive/PassiveTab';
import ConstellationTab from './constellation/ConstellationTab';
import ProfilTab from './profil/ProfilTab';

import { GenshinDB } from '../../../utils/database/genshinbd';

const CharacterPage = () => {
  const { name } = useParams()
  const [searchName, setName] = useState();
  const [characterData, setData] = useState();
  const [talentData, setTalentData] = useState();
  const [constellationData, setConstellationData] = useState();
  const [outfit, setOutfit] = useState();
  const [element, setElt] = useState();

  useEffect(() => {
    setName(name);

    let d = GenshinDB.findCharacter(name);
    setData(d);

    setElt(d.element);
    if (name === 'Aether' | name === 'Lumine') {
      setName('Traveler (anemo)');
    }

  }, [name])

  useEffect(() => {
    setTalentData(GenshinDB.findTalents(searchName));
    setConstellationData(GenshinDB.findConstellations(searchName));
    setOutfit(GenshinDB.findOutfits(searchName));

    if (searchName && searchName.startsWith('Traveler')) {
      let open = searchName.indexOf('(');
      let close = searchName.indexOf(')');
      setElt(searchName.substring(open + 1, close));
      setTalentData(GenshinDB.findTalents(searchName.substring(open + 1, close)));
      setConstellationData(GenshinDB.findConstellations(searchName.substring(open + 1, close)));
    }
  }, [searchName])

  if (!characterData) {
    return (
      <div></div>
    )
  }

  return (
    <div className='character_main_container'>
      <CharacterStyle elt={element} />

      <Container className='character_container'>
        <ScrollArea>
          <CharacterInfoPage data={characterData}
            name={searchName} setName={setName} />

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
              <Tab label="Profil">
                <ProfilTab name={name}
                  outfit={outfit}
                  character={characterData} />
              </Tab>

              <Tab label="Avancement">
                <AdvancementTab name={name}
                  searchName={searchName}
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
                <ConstellationTab elt={element} name={name}
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