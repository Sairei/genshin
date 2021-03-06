import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { ActionIcon, Image } from '@mantine/core';

import { findImage } from '../../../../utils/finder/findImage';
import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';
import AttributeList from './AttributeList';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';

const ItemSkill = ({ skill, image }) => {
  const url = useLocation().pathname;
  const [lvl, setLvl] = useState(1);
  const maxLvl = skill.attributes.parameters.param1.length;
  
  const gender = url.toLocaleLowerCase().includes('lumine') ? "Female" : "Male";

  const upLvl = () => {
    if (lvl < maxLvl) {
      setLvl(lvl + 1);
    }
  }

  const downLvl = () => {
    if (lvl > 1) {
      setLvl(lvl - 1);
    }
  }

  return (
    <div className='skill'>
      <div className='skill_img_name_info'>
        <div className='skill_img_name'>
          <Image
            src={findImage(image)}
            height={80} width={80} />

          <div className='vertical_align_text skill_name'>
            {skill.name.substring(skill.name.indexOf(": ") + 1)}
          </div>
        </div>

        <div className='skill_info'>
          {
            convertInfo(convertTextWithGender(skill.info, gender))
          }
        </div>
      </div>

      <div className='skill_info_attributes'>
        <div className='vertical_align_text'>
          <div className='skill_lvl'>
            <ActionIcon className='button_lvl'
              disabled={lvl === 1} onClick={downLvl}
              size="lg" variant="light">
              -
            </ActionIcon>

            <div className='vertical_align_text'>
              LVL {lvl}
            </div>

            <ActionIcon className='button_lvl'
              disabled={lvl === maxLvl} onClick={upLvl}
              size="lg" variant="light">
              +
            </ActionIcon>
          </div>
        </div>

        <div className='skill_attributes'>
          <AttributeList attributes={skill.attributes} lvl={lvl} />
        </div>
      </div>
    </div>
  );
};

export default ItemSkill;