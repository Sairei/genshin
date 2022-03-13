import React, { useEffect, useState } from 'react';

import { Space } from '@mantine/core';

import { sortMonsterMaterials } from '../../../../utils/sort/sortMonsterMaterials';
import MoraSection from './MoraSection';
import ExperienceSection from './ExperienceSection';
import ArtifactSection from './ArtifactSection';
import CristalSection from './CristalSection';

const genshindb = require('genshin-db');

const MonsterMaterialPage = () => {
  const [monsterList, setMonsterList] = useState([]);

  useEffect(() => {
    let list = [];
    genshindb.enemies('name', { matchCategories: true }).map((m) => {
      let enObj = genshindb.enemies(m);

      let o = genshindb.enemies(m, { resultLanguage: 'French' });
      o['link'] = m;
      o['rewardEn'] = enObj.rewardpreview;

      list.push(o)

      return '';
    });

    setMonsterList(sortMonsterMaterials(list));
  }, []);
  console.log(monsterList);

  return (
    <div className='monster_material_container' >

      <MoraSection monsterList={monsterList["mora"]} />

      <Space h="lg" />
      <hr />
      <Space h="lg" />

      <ExperienceSection monsterList={monsterList["exp"]} />

      <Space h="lg" />
      <hr />
      <Space h="lg" />

      <ArtifactSection monsterList={monsterList["artifact"]} />

      <Space h="lg" />
      <hr />
      <Space h="lg" />

      <CristalSection monsterList={monsterList["cristal"]} />

    </div>
  );
};

export default MonsterMaterialPage;