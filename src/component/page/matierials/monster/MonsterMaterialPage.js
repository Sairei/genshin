import React, { useEffect, useState } from 'react';

import { sortMonsterMaterials } from '../../../../utils/sort/sortMonsterMaterials';
import TypeMonster from './TypeMonster';

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
      o['categoryEn'] = enObj.category;

      list.push(o)

      return '';
    });

    setMonsterList(sortMonsterMaterials(list));
  }, []);

  return (
    <div className='monster_material_container' >

      <TypeMonster monsterList={monsterList["materials"]} />

    </div>
  );
};

export default MonsterMaterialPage;