import React from 'react';

import { Image, Tooltip } from '@mantine/core';

import { GenshinDB } from '../../../../utils/database/genshinbd';
import { findImage } from '../../../../utils/finder/findImage';
import { simplifyText } from '../../../../utils/converter/simplifyElementText';


const CharacterList = ({ characters }) => {
  if (!characters) {
    return <></>
  }

  return (
    <div>
      {
        characters.map((charac, index) => {
          let characName = charac.name;
          let element = "";

          let searchName = characName;
          if (characName.includes('(')) {
            searchName = "Aether";
          }
          let tmp = GenshinDB.findCharacter(searchName);

          let img = tmp.images;
          if (searchName === "Aether") {
            img = img.image;
            element = characName.substring(characName.indexOf('(') + 1, characName.indexOf(')'));
            characName = "Aether / Lumine"
          }
          else {
            img = findImage(img.nameicon);
            element = tmp.element;
          }

          return (
            <Tooltip key={index}
            label={characName} position="bottom"
            transition="slide-down"
            >
              <Image
                fit='contain'
                className={`new_charac border_${simplifyText(element)}`}
                width={100} height={100}
                src={img} alt={characName}
              />
            </Tooltip>
          )
        })
      }
    </div>
  );
};

export default CharacterList;