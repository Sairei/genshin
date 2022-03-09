import React, { useEffect, useState } from 'react';

import { Tab, Tabs } from '@mantine/core';

import { categorie } from '../../../utils/categorie/categorie';
import BestiaryList from './BestiaryList';
import BestiaryInfo from './BestiaryInfo';

const genshindb = require('genshin-db');

const BestiaryPage = () => {
  const [selected, setSelect] = useState();
  const [animalList, setAnimalList] = useState({});
  const [enemiesList, setEnemiesList] = useState({});

  useEffect(() => {
    let animalTmpList = {}
    let enemiesTmpList = {}

    // Animaux
    categorie.animal.map((elt) => {
      animalTmpList[elt] = [];
      genshindb.animals(elt, { matchCategories: true }).map((enName) => {
        let a = genshindb.animals(enName, { resultLanguage: "French" });
        a['link'] = enName;
        animalTmpList[elt].push(a);
        return '';
      });
      return '';
    })

    setAnimalList(animalTmpList);

    // Enemies
    categorie.enemies.map((elt) => {
      enemiesTmpList[elt] = [];
      genshindb.enemies(elt, { matchCategories: true }).map((enName) => {
        let e = genshindb.enemies(enName, { resultLanguage: "French" });
        e['link'] = enName;
        enemiesTmpList[elt].push(e);
        return '';
      });
      return '';
    })

    setEnemiesList(enemiesTmpList);
  }, []);

  const handleSelected = (elt) => {
    if (elt === selected) {
      setSelect(undefined);
    } else {
      setSelect(elt);
    }
  }

  let display = !selected ? "none" : "";

  return (
    <div className='bestiary_container' >

      <Tabs variant="outline" orientation="vertical">
        <Tab label="Animaux" >
          <BestiaryList list={animalList} select={handleSelected} />
        </Tab>
        <Tab label="Enemies" >
          <BestiaryList list={enemiesList} select={handleSelected} />
        </Tab>
      </Tabs>

      <BestiaryInfo select={selected} display={display} />

    </div>
  );
};

export default BestiaryPage;