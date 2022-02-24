import React from 'react';

import { Image } from '@mantine/core';

import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';

const ItemConstellation = ({ constellation, img }) => {
  return (
    <div className='constellation'>
      <div className='constellation_img_name'>
        <Image
          src={img}
          height={80} width={80} />

        <div className='vertical_align_text constellation_name'>
          {constellation.name.substring(constellation.name.indexOf(": ") + 1)}
        </div>
      </div>

      <div className='constellation_info'>
        {
          convertInfo(constellation.effect)
        }
      </div>
    </div>
  );
};

export default ItemConstellation;