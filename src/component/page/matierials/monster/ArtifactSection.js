import React from 'react';

import { Accordion, Image, Title } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import MonsterImage from './MonsterImage';

const ArtifactSection = ({ monsterList }) => {
  if (!monsterList) {
    return (
      <div></div>
    );
  }

  monsterList.sort((a, b) => {
    return a.values["name"].localeCompare(b.values["name"])
  })

  return (
    <div className="monster_material" >
      <Title order={1}>
        Artéfact
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
            let rarity = v.rarity;

            let title = values.name + " [";
            rarity.map((r, index) => {
              if (index !== 0) {
                title += " / ";
              }
              title += r;

              return '';
            })
            title += "]";

            let label =
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

export default ArtifactSection;