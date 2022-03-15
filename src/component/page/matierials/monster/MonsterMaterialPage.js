import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Space } from '@mantine/core';

import { sortMonsterMaterials } from '../../../../utils/sort/sortMonsterMaterials';
import TypeMonster from './TypeMonster';
import MaterialsByMonster from './MaterialsByMonster';

const genshindb = require('genshin-db');

const MonsterMaterialPage = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [types, setTypes] = useState([]);
  const url = useLocation();

  useEffect(() => {
    let list = [];
    genshindb.enemies('name', { matchCategories: true }).map((m) => {
      let enObj = genshindb.enemies(m);

      let o = genshindb.enemies(m, { resultLanguage: 'French' });
      o['link'] = m;
      o['rewardEn'] = enObj.rewardpreview;
      o['categoryEn'] = enObj.category;

      list.push(o)

      return '';
    });

    setMonsterList(sortMonsterMaterials(list));
  }, []);

  useEffect(() => {
    if (url.pathname.includes('monster')) {
      setTypes(['COMMON', 'ELITE']);
    } else if (url.pathname.includes('boss')) {
      setTypes(['BOSS']);
    }
  }, [url])

  return (
    <div className='monster_material_container' >
      <TypeMonster types={types}
        monsterList={monsterList["materials"]} />

      {
        url.pathname.includes('boss') &&
        <>
          <Space h="md" />
          <Space h="lg" />
          <hr />
          <Space h="lg" />

          <MaterialsByMonster monsterList={monsterList["cristal"]} />
        </>
      }
    </div>
  );
};

export default MonsterMaterialPage;