import React, { Fragment } from 'react';

import { Image, Space, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { findImage } from '../../../../utils/finder/findImage';
import { convertInfo } from '../../../../utils/converter/convertInfoToHTML';
import { convertTextWithGender } from '../../../../utils/converter/convertTextWithGender';
import UsedBy from './UsedBy';

import { GenshinDB } from '../../../../utils/database/genshinbd';

const ItemPage = () => {
  const { name } = useParams()
  const data = GenshinDB.findMaterials(name);

  return (
    <div className='item_container'>
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

      <div className='item_description'>
        {convertInfo(convertTextWithGender(data.description))}
      </div>

      {
        data.source.length > 0 &&
        <Fragment>
          <Space h='xl' />

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
        </Fragment>
      }

      <Space h='xl' />

      <UsedBy name={name} />
    </div>
  );
};

export default ItemPage;