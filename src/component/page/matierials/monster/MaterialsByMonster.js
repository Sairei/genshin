import React, { Fragment } from 'react';

import MonsterImage from './MonsterImage';
import MaterialsTable from './MaterialsTable';
import { findImage } from '../../../../utils/finder/findImage';
import { Space } from '@mantine/core';

const MaterialsByMonster = ({ monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  monsterList.sort((a, b) => {
    return a["rarity"].localeCompare(b["rarity"])
  })

  const list = {};
  monsterList.map((v) => {
    let whatIs = v.values.monsters[0].name + '_' + v.values.monsters.length
    if (!list[whatIs]) {
      list[whatIs] = {};
      list[whatIs]["objects"] = [];
      list[whatIs]["monsters"] = v.values.monsters;
    }

    list[whatIs]["objects"].push({
      link: v.name,
      name: v.values.name,
      rarity: v.rarity,
      img: v.img
    });

    return '';
  });

  return (
    <div className="monster_material" >
      {
        Object.entries(list).map((entry) => {
          let values = entry[1];

          return (
            <Fragment key={entry[0]} >
              <Space h='md' />

              <div className='list_materials'>
                <MaterialsTable values={values} />

                <div className='list_images vertical_align_text'>
                  <div>
                    {
                      values.monsters.map((elt) => {
                        return (
                          <MonsterImage key={elt.name}
                            name={elt.name}
                            src={findImage(elt.image)}
                          />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </Fragment>
          )
        })
      }
    </div>
  )
};

export default MaterialsByMonster;