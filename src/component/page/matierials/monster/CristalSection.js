import React from 'react';

import { Accordion, Image, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import MonsterImage from './MonsterImage';

const CristalSection = ({ monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  monsterList.sort((a, b) => {
    if (a["name"].split(" ")[0] == b["name"].split(" ")[0]) {
      return a["rarity"].localeCompare(b["rarity"])
    }

    return a["name"].localeCompare(b["name"])
  })

  return (
    <div className="monster_material" >
      <Title order={1}>
        Cristaux
      </Title>

      <Accordion className='accordion_materials'
        classNames={{
          icon: 'accordion_icon'
        }}
      >
        {
          monsterList.map((v) => {
            let name = v.name;
            let values = v.values;

            let title = values.name

            let label =
              <div className='img_title'>
                <Image
                  width={50}
                  src={findImage(v.img)}
                />

                <div className='vertical_align_text'>
                  <Title order={2}>
                    {title}
                  </Title>
                </div>
              </div>

            return (
              <Accordion.Item key={name}
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

export default CristalSection;