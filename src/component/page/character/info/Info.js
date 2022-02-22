import React from 'react';

import { convertRarityToStars } from '../../../../utils/converter/convertRarityToStars';

const Info = ({ name, weapon, rarity, elem }) => {
  const stars = convertRarityToStars(rarity);

  return (
    <div className='info_name_elem'>
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