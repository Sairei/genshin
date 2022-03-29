import React from 'react';

import { Image } from '@mantine/core';

import { genshin_version } from '../../utils/database/version';

const NewFeature = ({ version, size }) => {
  if (version !== genshin_version) {
    return (
      <></>
    );
  }

  return (
    <Image
      className='new_feature'
      src={require('../../assets/images/new-icon.png')}
      height={size} width={size} />
  );
};

export default NewFeature;