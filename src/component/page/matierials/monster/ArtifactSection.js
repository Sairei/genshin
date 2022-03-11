import React from 'react';

import { Image, Space, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import MonsterImage from './MonsterImage';

const ArtifactSection = ({ monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  monsterList.sort((a, b) => {
    return a["name"].localeCompare(b["name"])
  })

  return (
    <div className="monster_material" >
      <Title order={1}>
        Artéfact
      </Title>

      {
        monsterList.map((v) => {
          let name = v.name;
          let values = v.values;
          let rarity = v.rarity;

          let title = values.name + " [";
          rarity.map((r, index) => {
            if (index !== 0) {
              title += " / ";
            }
            title += r;

            return '';
          })
          title +="]";
          return (
            <div key={name}>
              <Space h="lg" />

              <div className='img_title'>
                {
                  Object.entries(v.img).map((elt) => {
                    return (
                      <Image key={elt[0]}
                        width={50}
                        src={elt[1]}
                      />
                    );
                  })
                }

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

export default ArtifactSection;