import React, { useEffect, useState } from 'react';

import { Tab, Tabs } from '@mantine/core';

import { categorie } from '../../../utils/categorie/categorie';
import BestiaryList from './BestiaryList';

const genshindb = require('genshin-db');

const BestiaryPage = () => {
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

  console.log(animalList);
  console.log(enemiesList);

  return (
    <div className='bestiary_container' >
      <div className='list_bestiary'>
        <Tabs variant="outline" orientation="vertical">
          <Tab label="Animaux" >
            <BestiaryList list={animalList} />
          </Tab>
          <Tab label="Enemies" >
            <BestiaryList list={enemiesList} />
          </Tab>
        </Tabs>
      </div>

      <div className='bestiary_page'>

      </div>
    </div>
  );
};

export default BestiaryPage;