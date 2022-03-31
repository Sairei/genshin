import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { Space } from '@mantine/core';

import { sortMonsterMaterials } from '../../../../utils/sort/sortMonsterMaterials';
import TypeMonster from './TypeMonster';
import MaterialsByMonster from './MaterialsByMonster';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const MonsterMaterialPage = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [types, setTypes] = useState([]);
  const url = useLocation();

  useEffect(() => {
    let list = [];
    GenshinDB.getAllEnemiesNames().map((m) => {
      list.push(GenshinDB.findEnemies(m));

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