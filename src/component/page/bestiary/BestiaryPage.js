import React, { useEffect, useState } from 'react';

import { Tabs } from '@mantine/core';

import { categorie } from '../../../utils/categorie/categorie';
import BestiaryList from './BestiaryList';
import BestiaryInfo from './info/BestiaryInfo';

import { GenshinDB } from '../../../utils/database/genshinbd';

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
      GenshinDB.findAnimalByCategorie(elt).map((name) => {
        let a = GenshinDB.findAnimals(name);
        animalTmpList[elt].push(a);
        return '';
      });
      return '';
    })

    setAnimalList(animalTmpList);

    // Enemies
    categorie.enemies.map((elt) => {
      enemiesTmpList[elt] = [];
      GenshinDB.findEnemiesByCategorie(elt).map((name) => {
        let e = GenshinDB.findEnemies(name);
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

      <Tabs variant="outline" orientation="vertical" defaultValue="Animaux">
        <Tabs.List>
          <Tabs.Tab value="Animaux">Animaux</Tabs.Tab>
          <Tabs.Tab value="Enemies">Enemies</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Animaux" >
          <BestiaryList list={animalList} select={handleSelected} />
        </Tabs.Panel>
        <Tabs.Panel value="Enemies" >
          <BestiaryList list={enemiesList} select={handleSelected} />
        </Tabs.Panel>

      </Tabs>

      <BestiaryInfo select={selected} display={display} />

    </div>
  );
};

export default BestiaryPage;