import { Image, Tooltip } from '@mantine/core';
import React, { Fragment } from 'react';
import { findImage } from '../../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const CharactersListByDomain = ({ materials }) => {
  return (
    <div className='characters_by_donjon'>
      {
        genshindb.talents('name', { matchCategories: true }).map((elt) => {
          let name = elt.includes("Traveler") ? "Aether" : elt;
          let img = genshindb.characters(name).images;
          let characName = elt;
          if (name === "Aether") {
            img = img.image;
            characName = "Aether / Lumine"
          }
          else {
            img = findImage(img.nameicon);
          }

          let talent = genshindb.talents(elt);
          let lvl2 = talent.costs.lvl2;

          if (lvl2.filter(e => e.name === materials[0].link).length > 0) {
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