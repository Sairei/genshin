import React from 'react';
import { categorie } from '../../../../utils/categorie/categorie';
import CategorieMonster from './CategorieMonster';

const TypeMonster = ({ types, monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  const monstersByType = {};
  monsterList.map((elt) => {
    let monster = elt.values.monsters[0].obj;
    
    if (!monstersByType[monster.enemytype]) {
      monstersByType[monster.enemytype] = [];
    }
    monstersByType[monster.enemytype].push(elt);

    return '';
  })

  if (!types) {
    types = categorie.enemiesType;
  }

  return (
    <>
      {
        types.map((v) => {
          return (
            <CategorieMonster key={v}
              monsterList={monstersByType[v]} />
          );
        })
      }
    </>
  )
};

export default TypeMonster;