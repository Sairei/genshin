import React from 'react';

import { Image, Space, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import MonsterImage from './MonsterImage';

const ExperienceSection = ({ monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  return (
    <div className="monster_material" >
      <Title order={1}>
        Expériences
      </Title>

      {
        monsterList.map((v) => {
          let name = v.name;
          let values = v.values;

          let title = values.name + (values.rarity
            ? " " + values.rarity
            : "");
          return (
            <div key={name}>
              <Space h="lg" />

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

              <div className='list_images'>
                {
                  values.monsters.map((elt) => {
                    return (
                      <MonsterImage key={elt.name}
                        src={findImage(elt.image)}
                      />
                    )
                  })
                }
              </div>

              <Space h="lg" />
            </div>
          )
        })
      }
    </div>
  )
};

export default ExperienceSection;