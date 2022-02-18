import React from 'react';

import { convertElemToColor } from '../../../../utils/converter/convertElemToColor';
import { convertRarityToStars } from '../../../../utils/converter/convertRarityToStars';

const Info = ({ name, weapon, rarity, elem }) => {
  const color = convertElemToColor(elem);

  const stars = convertRarityToStars(rarity);

  const style = `
    .info_name_elem > * {
      color: ${color};
    }
  `;
  return (
    <div className='info_name_elem'>
      <style>
        {style}
      </style>

      <div className='info_name'>
        {name}
      </div>

      <div className='info_rarity'>
        {stars}
      </div>

      <div className='info_elem'>
        {`${weapon} / ${elem}`}
      </div>
    </div>
  );
};

export default Info;