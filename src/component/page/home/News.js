import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Title } from '@mantine/core';

import { genshin_versions } from '../../../utils/database/version';
import { sortByVersion } from '../../../utils/sort/sortByVersion';
import { GenshinDB } from '../../../utils/database/genshinbd';
import VersionContent from '../news/VersionContent';

const News = () => {
  let version = genshin_versions[0];
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
    setCharacList(sortByVersion(cList)[version.num]);
    
    let aList = [];
    GenshinDB.getAllArtifactNames().forEach(name => {
      aList.push(GenshinDB.findArtifact(name));
    });
    setArtifactList(sortByVersion(aList)[version.num]);
    
    let rList = [];
    GenshinDB.getAllFoodsNames().forEach(name => {
      rList.push(GenshinDB.findFood(name));
    });
    setRecipeList(sortByVersion(rList)[version.num]);
    
    let wList = [];
    GenshinDB.getAllWeaponsNames().forEach(name => {
      wList.push(GenshinDB.findWeapon(name));
    });
    setWeaponList(sortByVersion(wList)[version.num]);
    
    let eList = [];
    GenshinDB.getAllEnemiesNames().forEach(name => {
      eList.push(GenshinDB.findEnemies(name));
    });
    setEnemiesList(sortByVersion(eList)[version.num]);
    
    let bList = [];
    GenshinDB.getAllAnimalNames().forEach(name => {
      bList.push(GenshinDB.findAnimals(name));
    });
    setBestiaryList(sortByVersion(bList)[version.num]);
  }, [version])

  return (
    <div className='home_news_container'>
      <Title order={1}>
        Nouveautés de la version {version.num}
      </Title>
      
      <VersionContent 
        characterList={characterList}
        artifactList={artifactList}
        recipeList={recipeList}
        weaponList={weaponList}
        enemiesList={enemiesList}
        bestiaryList={bestiaryList} />

      <Link className='right' to="/news">Voir toutes les versions...</Link>
    </div>
  );
};

export default News;