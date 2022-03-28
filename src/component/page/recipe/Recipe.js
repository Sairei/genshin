import React from 'react';

import { Image } from '@mantine/core';

import { findImage } from '../../../utils/finder/findImage';

const Recipe = ({ recipe }) => {
  return (
    <div className='recipe'>
      <div className='img_name'>
        <div className='div_image'>
          <Image
            className={`image rarity_${recipe.rarity}`}
            width={75} height={75}
            src={findImage(recipe.images.nameicon)} />
        </div>

        <div className='vertical_align_text'>
          <div className='name'>
            {recipe.name}
          </div>
          <div className='effect'>
            {recipe.effect}
          </div>
        </div>
      </div>

      <div className='desc'>
        {recipe.description}
      </div>
    </div>
  );
};

export default Recipe;