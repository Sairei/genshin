import { Image } from '@mantine/core';
import React from 'react';

const NewFeature = ({ version }) => {
  if (version !== "2.6") {
    return (
      <></>
    );
  }

  return (
    <Image
      className='new_feature'
      src={require('../../assets/images/new-icon.png')}
      height={75} width={75} />
  );
};

export default NewFeature;