import React from 'react';

import { Image, Tooltip } from '@mantine/core';

const MonsterImage = ({ name, src }) => {
  return (
    <Tooltip
      className='bestiary_image'
      label={name} position="bottom"
      transition="slide-down"
    >
      <Image
        radius='lg' fit='contain'
        width={75} height={75}
        src={src}
      />
    </Tooltip>
  );
};

export default MonsterImage;