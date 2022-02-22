import React from 'react';

import { Space } from '@mantine/core';

import BaseStats from './BaseStats';
import AscentTable from './AscentTable';

const AdvancementTab = ({ character, name }) => {
  return (
    <div className='advancement_container'>
      <BaseStats name={name} />

      <Space h="xl" />
      <Space h="xl" />

      <AscentTable character={character} />
    </div>
  );
};

export default AdvancementTab;