import React from 'react';

import { Image } from '@mantine/core';

import { findImage } from '../../../utils/finder/findImage';
import { convertInfo } from '../../../utils/converter/convertInfoToHTML';

const BestiaryInfo = ({ display, select }) => {
  return (
    <div className='bestiary_page vertical_align_text' style={{ display: display }}>
      {
        select &&
        <div>
          <div className='image_nom_bestiaire'>
            <div className='vertical_align_text'>
              {select.name}
            </div>
            <Image
              className='img'
              width={100} height={100}
              src={findImage(select.images.nameicon)} />
          </div>

          <div>
            {convertInfo(select.description)}
          </div>
        </div>
      }
    </div>
  );
};

export default BestiaryInfo;