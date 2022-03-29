import React from 'react';

import { Image, Space, Title } from '@mantine/core';

import { ConvertFR } from '../../../utils/categorie/convertByLang';
import { findImage } from '../../../utils/finder/findImage';
import NewFeature from '../../UI/NewFeature';

const ImageList = ({ select, type, bestiaryList }) => {

  return (
    <>
      <Title order={3}>
        {ConvertFR.animalAndEnemiesLabel(type)}
      </Title>

      <Space h='md' />

      <div className='list_images'>
        {
          bestiaryList.map((elt) => {
            console.log(elt);
            return (
              <div className='bestiary_image'>
                <NewFeature
                  version={elt.version} size={40} />

                <Image key={elt.link}
                  onClick={() => select(elt)}
                  radius='lg' fit='contain'
                  width={100} height={100}
                  src={findImage(elt.images.nameicon)}
                />
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default ImageList;