import React from 'react';

import { Accordion, Image, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import MonsterImage from './MonsterImage';

const MoraSection = ({ monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  return (
    <div className="monster_material" >
      <Title order={1}>
        Monnais
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

            let title = values.name + (values.rarity
              ? " " + values.rarity
              : "");

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

export default MoraSection;