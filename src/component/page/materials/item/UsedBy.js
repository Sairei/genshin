import React from 'react';

import { Image, Title, Tooltip } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const UsedBy = ({ name }) => {
  let characList = [];

  GenshinDB.getAllTalentsNames().map((elt) => {
    let find = false;
    let talents = GenshinDB.findTalents(elt);

    Object.entries(talents.costs).map((lvl) => {
      if (lvl[1].filter(e => e.name === name).length > 0) {
        find = true;
      }
      return '';
    })

    let characName = elt.includes("(") ? "Aether" : elt;
    if (find) {
      characList.push(characName);
    }
    return '';
  })

  GenshinDB.getAllCharactersNames().map((elt) => {
    let find = false;
    let charac = GenshinDB.findCharacter(elt);

    Object.entries(charac.costs).map((lvl) => {
      if (lvl[1].filter(e => e.name === name).length > 0) {
        find = true;
      }
      return '';
    })

    if (find) {
      characList.push(charac.name);
    }
    return '';
  })

  characList = [...new Set(characList)];

  return (
    <div className='characters_list'>
      {
        characList.length > 0 &&
        <Title order={3}>
          Utilisé par :
        </Title>
      }

      <div className='list'>
        {
          characList.map((elt) => {
            let characName = elt;
            let img = GenshinDB.findCharacter(elt).images;
            if (elt === "Aether") {
              img = img.image;
              characName = "Aether / Lumine"
            }
            else {
              img = findImage(img.nameicon);
            }

            return (
              <div className='charac_img' key={characName}>
                <Tooltip
                  className='bestiary_image'
                  label={characName} position="bottom"
                  transition="slide-down"
                >
                  <Image
                    fit='contain'
                    width={100} height={100}
                    src={img} alt={characName}
                  />
                </Tooltip>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default UsedBy;