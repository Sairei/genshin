import React, { useEffect, useState } from 'react';

import { Accordion, Title } from '@mantine/core';

import { genshin_versions } from '../../../utils/database/version';
import { sortByVersion } from '../../../utils/sort/sortByVersion';
import VersionContent from './VersionContent';

import { GenshinDB } from '../../../utils/database/genshinbd';

// TODO : https://genshin-impact.fandom.com/wiki/Version

const NewsPage = () => {
  const [characterList, setCharacList] = useState([]);
  const [artifactList, setArtifactList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [weaponList, setWeaponList] = useState([]);
  const [enemiesList, setEnemiesList] = useState([]);
  const [bestiaryList, setBestiaryList] = useState([]);

  useEffect(() => {
    let cList = [];
    GenshinDB.getAllTalentsNames().forEach(name => {
      cList.push(GenshinDB.findTalents(name));
    });
    setCharacList(sortByVersion(cList));
    
    let aList = [];
    GenshinDB.getAllArtifactNames().forEach(name => {
      aList.push(GenshinDB.findArtifact(name));
    });
    setArtifactList(sortByVersion(aList));
    
    let rList = [];
    GenshinDB.getAllFoodsNames().forEach(name => {
      rList.push(GenshinDB.findFood(name));
    });
    setRecipeList(sortByVersion(rList));
    
    let wList = [];
    GenshinDB.getAllWeaponsNames().forEach(name => {
      wList.push(GenshinDB.findWeapon(name));
    });
    setWeaponList(sortByVersion(wList));
    
    let eList = [];
    GenshinDB.getAllEnemiesNames().forEach(name => {
      eList.push(GenshinDB.findEnemies(name));
    });
    setEnemiesList(sortByVersion(eList));
    
    let bList = [];
    GenshinDB.getAllAnimalNames().forEach(name => {
      bList.push(GenshinDB.findAnimals(name));
    });
    setBestiaryList(sortByVersion(bList));
  }, [])

  const items = genshin_versions.map(version => {
    return (
      <Accordion.Item key={version.num} className='version_container' value={`Version ${version.num}`}>
        <Accordion.Control>     
          <div className='title_div'>
            <Title order={1}> Version { version.num } </Title>
            <span className='release_date'>Sorti le { version.date }</span>
            <div className='title_separator'></div>
          </div>
        </Accordion.Control>
        <Accordion.Panel>
          <VersionContent
            characterList={characterList[version.num]}
            artifactList={artifactList[version.num]}
            recipeList={recipeList[version.num]}
            weaponList={weaponList[version.num]}
            enemiesList={enemiesList[version.num]}
            bestiaryList={bestiaryList[version.num]} />
        </Accordion.Panel>
      </Accordion.Item>
    )
  })

  return (
    <div className='news_container'>
      <Accordion chevronPosition="right">
        { items }
      </Accordion>
    </div>
  );
};

export default NewsPage;