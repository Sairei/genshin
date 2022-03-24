import React from 'react';

import { useParams } from 'react-router-dom';
import { Image, Space, Title } from '@mantine/core';

import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';
import { findImage } from '../../../../utils/finder/findImage';

const genshindb = require('genshin-db');

const WeaponPage = () => {
  const { name } = useParams()
  const data = genshindb.weapons(name, { resultLanguage: "French" });

  return (
    <div className='weapon_container'>
      <div className='name_image'>
        <Image fit='contain'
          width={100} height={100}
          src={findImage(data.images.nameicon)} />

        <div className='name vertical_align_text'>
          <Title order={1}>
            {convertTextWithGender(data.name)}
          </Title>
        </div>
      </div>

      <div className='separator'>
        <Image
          src={require('../../../../assets/images/horizontal_separator.png')} />
      </div>
      <Space h='md' />

      <div className='weapon_description'>
        {convertInfo(convertTextWithGender(data.description))}
      </div>
    </div>
  );
};

export default WeaponPage;