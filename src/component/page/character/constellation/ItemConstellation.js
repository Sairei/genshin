import React from 'react';

import { useLocation } from 'react-router-dom';
import { Image } from '@mantine/core';

import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';

const ItemConstellation = ({ constellation, img }) => {
  const url = useLocation().pathname;
  const gender = url.toLocaleLowerCase().includes('lumine') ? "Female" : "Male";

  return (
    <div className='constellation'>
      <div className='constellation_img_name'>
        <Image withPlaceholder
          src={img}
          height={80} width={80} />

        <div className='vertical_align_text constellation_name'>
          {constellation.name.substring(constellation.name.indexOf(": ") + 1)}
        </div>
      </div>

      <div className='constellation_info'>
        {
          convertInfo(convertTextWithGender(constellation.effect, gender))
        }
      </div>
    </div>
  );
};

export default ItemConstellation;