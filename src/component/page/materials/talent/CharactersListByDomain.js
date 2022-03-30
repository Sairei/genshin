import { Image, Tooltip } from '@mantine/core';
import React, { Fragment } from 'react';
import { findImage } from '../../../../utils/finder/findImage';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const CharactersListByDomain = ({ materials }) => {
  return (
    <div className='characters_by_donjon'>
      {
        GenshinDB.getAllTalentsNames().map((elt) => {
          let name = elt.includes("(") ? "Aether" : elt;
          let img = GenshinDB.findCharacter(name).images;

          let characName = elt;
          if (name === "Aether") {
            img = img.image;
            characName = "Aether / Lumine"
          }
          else {
            img = findImage(img.nameicon);
          }

          let talent = GenshinDB.findTalents(elt);
          let lvl2 = talent.costs.lvl2;

          if (lvl2.filter(e => e.name === materials[0].name).length > 0) {
            return (
              <div className='charac_img' key={elt}>
                <Tooltip
                  className='bestiary_image'
                  label={characName} position="bottom"
                  transition="slide-down"
                >
                  <Image
                    fit='contain'
                    width={60} height={60}
                    src={img} alt={talent.name}
                  />
                </Tooltip>
              </div>
            );
          }

          return (
            <Fragment key={elt} />
          );
        })
      }
    </div>
  );
};

export default CharactersListByDomain;