import React from 'react';

import { useLocation } from 'react-router-dom';
import { Image } from '@mantine/core';

import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';
import { findImage } from '../../../../utils/finder/findImage';

const ItemPassive = ({ passive, image }) => {
  const url = useLocation().pathname;
  const gender = url.toLocaleLowerCase().includes('lumine') ? "Female" : "Male";

  return (
    <div className='passive'>
      <div className='passive_img_name'>
        <Image
          src={findImage(image)}
          height={80} width={80} />

        <div className='vertical_align_text passive_name'>
          {passive.name.substring(passive.name.indexOf(": ") + 1)}
        </div>
      </div>

      <div className='passive_info'>
        {
          convertInfo(convertTextWithGender(passive.info, gender))
        }
      </div>
    </div>
  );
};

export default ItemPassive;