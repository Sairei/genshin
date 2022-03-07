import React from 'react';

import { Image, Space, Title } from '@mantine/core';

import { ConvertFR } from '../../../utils/categorie/convertByLang';
import { findImage } from '../../../utils/finder/findImage';

const ImageList = ({ type, bestiaryList }) => {
  return (
    <>
      <Title order={3}>
        {ConvertFR.animalAndEnemiesLabel(type)}
      </Title>

      <Space h='md' />

      <div className='list_images'>
        {
          bestiaryList.map((elt) => {
            return (
              <Image key={elt.link}
                className='bestiary_image'
                radius='lg' fit='contain'
                width={100} height={100}
                src={findImage(elt.images.nameicon)}
              />
            );
          })
        }
      </div>
    </>
  );
};

export default ImageList;