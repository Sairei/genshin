import React from 'react';

import { Accordion, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import MonsterImage from './MonsterImage';

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
      <Accordion className='accordion_materials' 
        iconPosition='right' multiple >
        {
          Object.entries(list).map((entry) => {
            let values = entry[1];

            let label =
              <div className='img_title'>
                {
                  Object.entries(values.objects).map((elt) => {
                    let obj = elt[1];

                    return (
                      <Image key={obj.name}
                        width={50}
                        src={findImage(obj.img)}
                      />
                    );
                  })
                }
              </div>

            return (
              <Accordion.Item key={entry[0]}
                label={label}
              >
                <div className='list_images'>
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
              </Accordion.Item>
            )
          })
        }
      </Accordion>
    </div>
  )
};

export default MaterialsByMonster;