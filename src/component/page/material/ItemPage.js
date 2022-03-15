import React from 'react';

import { Image, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { findImage } from '../../../utils/finder/findImage';
import { convertInfo } from '../../../utils/converter/convertInfoToHTML';

const genshindb = require('genshin-db');

const ItemPage = () => {
  const { name } = useParams()
  const data = genshindb.materials(name, { resultLanguage: "French" });

  console.log(data);

  return (
    <div className='item_container'>
      <div className='name_image'>
        <Image fit='contain'
          width={100} height={100}
          src={findImage(data.images.nameicon)} />

        <div className='name vertical_align_text'>
          <Title order={1}>
            {data.name}
          </Title>
        </div>
      </div>

      <div className='item_description'>
        {convertInfo(data.description)}
      </div>

      <div className='item_sources'>
        {
          data.source.map((s, index) => {
            return (
              <div key={index}>
                {s}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ItemPage;