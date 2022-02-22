import React, { useState } from 'react';

import { ActionIcon, Image } from '@mantine/core';
import { findImage } from '../../../../utils/findImage';
import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';

const ItemSkill = ({ skill, image }) => {
  const [lvl, setLvl] = useState(1);
  const maxLvl = 10;

  const upLvl = () => {
    if (lvl < maxLvl) {
      setLvl(lvl+1);
    }
  }

  const downLvl = () => {
    if (lvl > 1) {
      setLvl(lvl-1);
    }
  }

  return (
    <div className='skill'>
      <div className='skill_img_name_lvl'>
        <div className='skill_img_name'>
          <Image
            src={findImage(image)}
            height={80} width={80} />

          <div className='vertical_align_text skill_name'>
            {skill.name.substring(skill.name.indexOf(": ") + 1)}
          </div>
        </div>

        <div className='vertical_align_text'>
          <div className='skill_lvl'>
            <ActionIcon className='button_lvl' 
              disabled={lvl===1} onClick={downLvl}
              size="lg" variant="light">
              -
            </ActionIcon>

            <div className='vertical_align_text'>
              LVL {lvl}
            </div>

            <ActionIcon className='button_lvl' 
              disabled={lvl===maxLvl} onClick={upLvl}
              size="lg" variant="light">
              +
            </ActionIcon>
          </div>
        </div>
      </div>

      <div className='skill_info'>
        {
          convertInfo(skill.info)
        }
      </div>
    </div>
  );
};

export default ItemSkill;