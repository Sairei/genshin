import React, { useEffect, useState } from 'react';

import { Title } from '@mantine/core';

import { sortMonsterMaterials } from '../../../../utils/sort/sortMonsterMaterials';

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

  return (
    <div>
      {
        Object.entries(monsterList).map((entry) => {
          let key = entry[0];
          let values = entry[1];

          let title = values.name + (values.rarity 
            ? " " + values.rarity
            : "");
          return (
            <div key={key}>
              <Title order={2}>
                {title}
              </Title>

              <ul>
                {
                  values.monsters.map((monstre) => {
                    return (
                      <li key={key+"_"+monstre.name}>
                        {monstre.name}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  );
};

export default MonsterMaterialPage;