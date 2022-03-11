import React from 'react';

import { Image } from '@mantine/core';

const MonsterImage = ({ src }) => {
  return (
    <Image
      className='bestiary_image'
      radius='lg' fit='contain'
      width={75} height={75}
      src={src}
    />
  );
};

export default MonsterImage;