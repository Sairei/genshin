import React, { Fragment } from 'react';
import { categorie } from '../../../../utils/categorie/categorie';
import MaterialsByMonster from './MaterialsByMonster';

const CategorieMonster = ({ monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  const monstersByCategorie = {};
  monsterList.map((elt) => {
    let monster = elt.values.monsters[0];

    if (!monstersByCategorie[monster.category]) {
      monstersByCategorie[monster.category] = [];
    }
    monstersByCategorie[monster.category].push(elt);

    return '';
  })

  return (
    <>
      {
        categorie.enemies.map((v) => {
          return (
            <Fragment key={v}>
              {
                monstersByCategorie[v] &&
                <MaterialsByMonster 
                  monsterList={monstersByCategorie[v]} />
              }
            </Fragment>
          );
        })
      }
    </>
  )
};

export default CategorieMonster;